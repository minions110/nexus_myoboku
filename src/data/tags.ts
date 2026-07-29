/**
 * Tool tags.
 *
 * Tools store tag *slugs*; display names live here so renaming a tag updates
 * every tool at once.
 */

export interface Tag {
  slug: string;
  name: string;
  description?: string;
}

export const tags: Tag[] = [
  { slug: "free-plan", name: "Free plan" },
  { slug: "freemium", name: "Freemium" },
  { slug: "open-source", name: "Open source" },
  { slug: "api", name: "API" },
  { slug: "enterprise", name: "Enterprise" },
  { slug: "realtime", name: "Realtime" },
  { slug: "multilingual", name: "Multilingual" },
  { slug: "no-code", name: "No-code" },
  { slug: "browser-extension", name: "Browser extension" },
  { slug: "mobile-app", name: "Mobile app" },
  { slug: "self-hosted", name: "Self-hosted" },
  { slug: "gpt-4", name: "GPT-4" },
  { slug: "claude", name: "Claude" },
  { slug: "fine-tuning", name: "Fine-tuning" },
  { slug: "rag", name: "RAG" },
  { slug: "vision", name: "Vision" },
  { slug: "voice", name: "Voice" },
  { slug: "code-assistant", name: "Code assistant" },
  { slug: "chatbot", name: "Chatbot" },
  { slug: "summarization", name: "Summarization" },
  { slug: "translation", name: "Translation" },
  { slug: "image-generation", name: "Image generation" },
  { slug: "video-generation", name: "Video generation" },
];

const bySlug = new Map(tags.map((t) => [t.slug, t]));

export function getAllTags(): Tag[] {
  return tags;
}

export function getTagBySlug(slug: string): Tag | undefined {
  return bySlug.get(slug);
}

/** Resolve an array of tag slugs to display names (unknown slugs are skipped). */
export function getTagNames(slugs: string[]): string[] {
  return slugs
    .map((s) => bySlug.get(s)?.name)
    .filter((n): n is string => Boolean(n));
}
