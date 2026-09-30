# AI Tool Database (`src/data`)

A typed, build-time data layer for the AI tools & services directory. It is
**server-only**: consumed in `.astro` frontmatter during static generation and
never shipped to the browser.

## Structure

```
src/data/
├── types.ts            # Shared `Tool`, `Pricing`, `PricingPlan` interfaces
├── categories.ts       # Category taxonomy + helpers
├── tags.ts             # Tag taxonomy + helpers
├── index.ts            # Barrel - import everything from here
└── tools/
    ├── index.ts        # Auto-discovery + query helpers + JSON-LD + validation
    ├── chatgpt.ts      # One file per tool (default-exports a `Tool`)
    ├── claude.ts
    ├── cursor.ts
    └── perplexity.ts
```

## Adding a tool

Drop a new file in `src/data/tools/` that default-exports a `Tool`. It is
picked up automatically by `import.meta.glob` - **no registration required**.

```ts
// src/data/tools/my-tool.ts
import type { Tool } from "../types";

const myTool: Tool = {
  id: "my-tool",
  slug: "my-tool",
  name: "My Tool",
  logo: "/logos/my-tool.svg",
  coverImage: "/covers/my-tool.svg",
  developer: "Acme",
  officialWebsite: "https://example.com",
  affiliateLink: "https://example.com/?ref=nexus", // optional
  category: "chat",          // must exist in categories.ts
  tags: ["api", "free-plan"], // must exist in tags.ts
  pricing: { model: "freemium", startingPrice: 0, currency: "USD", freeTrial: true },
  rating: 4.5,
  featured: false,
  publishDate: "2026-07-29",
  shortDescription: "One-line summary.",
  description: "Full description.",
  pros: ["..."],
  cons: ["..."],
  screenshots: ["/screenshots/my-tool-1.svg"],
  recommendedTools: ["chatgpt"],   // slugs of other tools
  recommendedServices: ["ai-coding"], // service page identifiers
  seoTitle: "My Tool - Review | Myoboku AI",
  seoDescription: "Meta description for search engines.",
};

export default myTool;
```

## Query helpers (`src/data/tools/index.ts`)

| Function | Returns | Notes |
| --- | --- | --- |
| `getAllTools()` | `Tool[]` | Sorted by name. |
| `getAllToolSlugs()` | `string[]` | For `getStaticPaths`. |
| `getFeaturedTools(limit?)` | `Tool[]` | Ranked by rating. |
| `getToolBySlug(slug)` | `Tool \| undefined` | O(1) cached lookup. |
| `getToolsByCategory(category)` | `Tool[]` | Ranked by rating. |
| `searchTools(query, opts?)` | `Tool[]` | Weighted, multi-term. |
| `getRelatedTools(slug, limit=4)` | `Tool[]` | Recommendations → shared tags → fallback. |
| `getToolJsonLd(slug)` | object \| null | schema.org `SoftwareApplication` for rich results. |
| `validateTool(tool)` / `validateAllTools()` | `ValidationIssue[]` | Referential-integrity checks. |

Taxonomy helpers: `getAllCategories()`, `getCategoryBySlug()`, `getAllTags()`,
`getTagBySlug()`, `getTagNames(slugs)`.

## Scalability (1000+ tools)

- **Zero-registration growth** - new files are auto-discovered via glob.
- **Normalised data** - tools store category/tag *slugs*, so taxonomy edits
  never touch tool files.
- **Memoised lookups** - slug and category indexes are built once per build.
- **Build-time only** - data is read in frontmatter; nothing reaches the client.

## SEO

Each tool carries `seoTitle`, `seoDescription`, `shortDescription`,
`publishDate` and `lastUpdated`. Use them in `<Layout>` plus `getToolJsonLd()`
for structured data, and `getAllToolSlugs()` to prerender every tool page:

```ts
// src/pages/tools/[slug].astro
import { getAllToolSlugs, getToolBySlug, getToolJsonLd } from "../../data";

export async function getStaticPaths() {
  return getAllToolSlugs().map((slug) => ({ params: { slug } }));
}
const { slug } = Astro.params;
const tool = getToolBySlug(slug);
```

## Validation

Call `validateAllTools()` from a build hook or dev script to surface unknown
categories/tags, broken `recommendedTools` references, and out-of-range ratings
before they reach production.
