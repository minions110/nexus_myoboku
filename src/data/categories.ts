/**
 * Tool categories.
 *
 * A tool stores a category *slug* (not the object), so this file is the single
 * place to rename, reorder or recolour categories.
 */

export interface Category {
  slug: string;
  name: string;
  description?: string;
  /** Icon name resolved by the `Icon.astro` component. */
  icon?: string;
  /** Lower numbers sort first. */
  order?: number;
}

export const categories: Category[] = [
  { slug: "chat", name: "AI Chat", icon: "command", order: 1 },
  { slug: "writing", name: "AI Writing", icon: "pen-tool", order: 2 },
  { slug: "coding", name: "AI Coding", icon: "code", order: 3 },
  { slug: "search", name: "AI Search", icon: "search", order: 4 },
  { slug: "image", name: "AI Image", icon: "image", order: 5 },
  { slug: "video", name: "AI Video", icon: "play", order: 6 },
  { slug: "audio", name: "AI Audio", icon: "audio-lines", order: 7 },
  { slug: "agents", name: "AI Agents", icon: "bot", order: 8 },
  { slug: "automation", name: "AI Automation", icon: "workflow", order: 9 },
  { slug: "design", name: "AI Design", icon: "palette", order: 10 },
  { slug: "data", name: "AI Data", icon: "database", order: 11 },
  { slug: "productivity", name: "Productivity", icon: "zap", order: 12 },
];

const bySlug = new Map(categories.map((c) => [c.slug, c]));

/** Every category, sorted by `order`. */
export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return bySlug.get(slug);
}
