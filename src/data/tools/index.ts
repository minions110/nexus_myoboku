import type { Tool } from "../types";
import { categories } from "../categories";
import { tags } from "../tags";

/**
 * Auto-discover every tool file in this directory.
 *
 * Adding a tool is as simple as dropping a `*.ts` file that default-exports a
 * `Tool` - no manual registration. This keeps the architecture linearly
 * scalable well past 1000 entries.
 *
 * `eager: true` is intentional: the data layer is consumed at build time inside
 * `.astro` frontmatter (server-only), so every entry is inlined into the build
 * and never shipped to the browser.
 */
const modules = import.meta.glob<{ default?: Tool }>(["./*.ts", "!./index.ts"], {
  eager: true,
});

/** Every tool, sorted alphabetically by name for stable output. */
export const tools: Tool[] = Object.values(modules)
  .map((m) => m.default)
  .filter((t): t is Tool => t != null)
  .sort((a, b) => a.name.localeCompare(b.name));

/* -------------------------------------------------------------------------- */
/* Internal caches (built lazily; safe for a single build process)            */
/* -------------------------------------------------------------------------- */

let _bySlug: Map<string, Tool> | null = null;
const bySlug = (): Map<string, Tool> => {
  if (!_bySlug) _bySlug = new Map(tools.map((t) => [t.slug, t]));
  return _bySlug;
};

let _byCategory: Map<string, Tool[]> | null = null;
const byCategory = (): Map<string, Tool[]> => {
  if (!_byCategory) {
    const map = new Map<string, Tool[]>();
    for (const tool of tools) {
      const list = map.get(tool.category);
      if (list) list.push(tool);
      else map.set(tool.category, [tool]);
    }
    _byCategory = map;
  }
  return _byCategory;
};

/* -------------------------------------------------------------------------- */
/* Query helpers                                                              */
/* -------------------------------------------------------------------------- */

/** Return every tool (sorted by name). */
export function getAllTools(): Tool[] {
  return tools;
}

/** Slugs for every tool - ideal for `getStaticPaths`. */
export function getAllToolSlugs(): string[] {
  return tools.map((t) => t.slug);
}

/** Featured tools, ranked by rating. Optionally capped with `limit`. */
export function getFeaturedTools(limit?: number): Tool[] {
  const featured = tools
    .filter((t) => t.featured)
    .sort((a, b) => b.rating - a.rating);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

/** Tools with the highest ratings right now - surfaced as "trending". */
export function getTrendingTools(limit = 6): Tool[] {
  return tools
    .slice()
    .sort(
      (a, b) =>
        b.rating - a.rating ||
        (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "")
    )
    .slice(0, limit);
}

/** Most recently reviewed/added tools, newest first. */
export function getRecentlyAddedTools(limit = 4): Tool[] {
  return tools
    .slice()
    .sort((a, b) =>
      (b.lastUpdated ?? b.publishDate).localeCompare(a.lastUpdated ?? a.publishDate)
    )
    .slice(0, limit);
}

/** Number of tools in a given category slug. */
export function getToolCountByCategory(category: string): number {
  return (byCategory().get(category) ?? []).length;
}


/** Look up a single tool by slug. O(1) via cache. */
export function getToolBySlug(slug: string): Tool | undefined {
  return bySlug().get(slug);
}

/** All tools in a category, ranked by rating. */
export function getToolsByCategory(category: string): Tool[] {
  return (byCategory().get(category) ?? []).slice().sort((a, b) => b.rating - a.rating);
}

export interface SearchOptions {
  limit?: number;
  /** Restrict matches to a single category. */
  category?: string;
  /** Restrict matches to a pre-filtered subset. */
  pool?: Tool[];
}

/** Weighted search across name, descriptions, developer, category and tags. */
export function searchTools(query: string, options: SearchOptions = {}): Tool[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  const pool = options.pool ?? (options.category ? getToolsByCategory(options.category) : tools);

  const scored = pool
    .map((tool) => {
      const haystack = [
        tool.name,
        tool.shortDescription,
        tool.description,
        tool.developer,
        tool.category,
        ...tool.tags,
      ]
        .join(" ")
        .toLowerCase();
      const score = terms.reduce((acc, term) => acc + (haystack.includes(term) ? 1 : 0), 0);
      return { tool, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.tool.rating - a.tool.rating);

  const result = scored.map((r) => r.tool);
  return options.limit ? result.slice(0, options.limit) : result;
}

/** Related tools: explicit recommendations first, then shared category/tags. */
export function getRelatedTools(slug: string, limit = 4): Tool[] {
  const tool = getToolBySlug(slug);
  if (!tool) return [];

  const seen = new Set<string>([slug]);
  const ranked: { tool: Tool; score: number }[] = [];

  const consider = (candidate: Tool, score: number) => {
    if (seen.has(candidate.slug)) return;
    seen.add(candidate.slug);
    ranked.push({ tool: candidate, score });
  };

  // 1. Editor-curated recommendations.
  for (const ref of tool.recommendedTools) {
    const recommended = getToolBySlug(ref);
    if (recommended) consider(recommended, 1000);
  }

  // 2. Same category, boosted by shared tags.
  for (const candidate of getToolsByCategory(tool.category)) {
    const sharedTags = candidate.tags.filter((tag) => tool.tags.includes(tag)).length;
    if (sharedTags > 0) consider(candidate, sharedTags * 10 + candidate.rating);
  }

  // 3. Fallback: top-rated same category to fill the slot.
  if (ranked.length < limit) {
    for (const candidate of getToolsByCategory(tool.category)) {
      consider(candidate, candidate.rating);
      if (ranked.length >= limit) break;
    }
  }

  return ranked
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.tool);
}

/* -------------------------------------------------------------------------- */
/* SEO helper                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * schema.org `SoftwareApplication` JSON-LD for a tool.
 * Render with `<script type="application/ld+json" set:html={JSON.stringify(ld)} />`.
 */
export function getToolJsonLd(slug: string) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;

  const currency = tool.pricing.currency ?? "USD";
  const price =
    tool.pricing.model === "contact"
      ? undefined
      : String(tool.pricing.startingPrice ?? 0);

  const offers = price
    ? { "@type": "Offer", price, priceCurrency: currency }
    : { "@type": "Offer", priceCurrency: currency };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.category,
    operatingSystem: "Web",
    description: tool.shortDescription,
    url: tool.officialWebsite,
    image: tool.coverImage,
    author: { "@type": "Organization", name: tool.developer },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(tool.rating),
      bestRating: "5",
      ratingCount: "1",
    },
    offers,
    datePublished: tool.publishDate,
    dateModified: tool.lastUpdated ?? tool.publishDate,
  };
}

/* -------------------------------------------------------------------------- */
/* Data integrity (opt-in: call from a build hook or dev script)              */
/* -------------------------------------------------------------------------- */

export interface ValidationIssue {
  slug: string;
  message: string;
}

/** Check a single tool for broken references and out-of-range data. */
export function validateTool(tool: Tool): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const categorySlugs = new Set(categories.map((c) => c.slug));
  const tagSlugs = new Set(tags.map((t) => t.slug));

  if (!categorySlugs.has(tool.category)) {
    issues.push({ slug: tool.slug, message: `Unknown category "${tool.category}"` });
  }
  for (const tag of tool.tags) {
    if (!tagSlugs.has(tag)) issues.push({ slug: tool.slug, message: `Unknown tag "${tag}"` });
  }
  for (const ref of tool.recommendedTools) {
    if (!bySlug().has(ref)) {
      issues.push({ slug: tool.slug, message: `recommendedTools references missing tool "${ref}"` });
    }
  }
  if (tool.rating < 0 || tool.rating > 5) {
    issues.push({ slug: tool.slug, message: `rating ${tool.rating} is out of range 0–5` });
  }
  if (tool.id !== tool.slug) {
    issues.push({ slug: tool.slug, message: `id "${tool.id}" should match slug` });
  }
  return issues;
}

/** Validate every tool. Call during builds/dev to catch data drift early. */
export function validateAllTools(): ValidationIssue[] {
  return tools.flatMap(validateTool);
}
