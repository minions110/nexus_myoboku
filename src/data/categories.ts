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
  { slug: "chat", name: "AI Chat", description: "Conversational AI assistants for writing, analysis and everyday tasks.", icon: "command", order: 1 },
  { slug: "writing", name: "AI Writing", description: "Tools that draft, edit and optimize written content for any audience.", icon: "pen-tool", order: 2 },
  { slug: "coding", name: "AI Coding", description: "Copilots and agents that write, refactor and review code with you.", icon: "code", order: 3 },
  { slug: "search", name: "AI Search", description: "Answer engines that research the live web with cited sources.", icon: "search", order: 4 },
  { slug: "image", name: "AI Image", description: "Generate and edit high-quality images from text prompts.", icon: "image", order: 5 },
  { slug: "video", name: "AI Video", description: "Create and edit video from text, images or AI avatars.", icon: "play", order: 6 },
  { slug: "audio", name: "AI Audio", description: "Text-to-speech, voice cloning and music generation.", icon: "audio-lines", order: 7 },
  { slug: "agents", name: "AI Agents", description: "Autonomous agents that plan and execute multi-step tasks.", icon: "bot", order: 8 },
  { slug: "automation", name: "AI Automation", description: "No-code platforms to connect apps and automate workflows.", icon: "workflow", order: 9 },
  { slug: "design", name: "AI Design", description: "Generative UI, branding and creative design tooling.", icon: "palette", order: 10 },
  { slug: "data", name: "AI Data", description: "Datasets, vector stores and data pipelines for AI.", icon: "database", order: 11 },
  { slug: "productivity", name: "Productivity", description: "AI built into docs, notes and team workflows.", icon: "zap", order: 12 },
];

const bySlug = new Map(categories.map((c) => [c.slug, c]));

/** Every category, sorted by `order`. */
export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return bySlug.get(slug);
}
