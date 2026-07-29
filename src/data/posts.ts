/**
 * Editorial blog posts.
 *
 * Stored as typed data (mirroring the tools pattern) so the homepage "Latest
 * Blog Posts" section and the `/blog` routes share a single source of truth.
 * `body` is an array of plain-text paragraphs rendered by the blog templates.
 */

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO 8601 publish date. */
  date: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
  /** Accent hue (0-360) for the card banner. */
  hue: number;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "best-ai-coding-tools-2026",
    title: "The Best AI Coding Tools in 2026",
    excerpt:
      "From AI-first editors to autonomous agents, here is our hands-on ranking of the AI coding tools that genuinely help you ship faster.",
    category: "Coding",
    author: "Nexus Team",
    date: "2026-07-20",
    readingTime: 8,
    hue: 235,
    body: [
      "AI coding tools have moved well beyond autocomplete. In 2026, the best ones understand your whole repository, plan multi-file changes, and even run tests before you review a diff. We spent weeks pairing with the leading options to see which ones truly accelerate shipping.",
      "Cursor remains our top pick for developers who live in their editor. Its codebase-aware context and choice of frontier models make refactors and feature work feel effortless. GitHub Copilot is the safest enterprise choice, thanks to deep GitHub integration and rock-solid access controls that security teams actually approve.",
      "If you want an agent that builds entire apps from a single prompt, Replit Agent and v0 are the ones to watch. They shine for prototypes and greenfield work, where speed matters more than fine-grained control over every file.",
      "Whatever you pick, treat AI output as a draft. The fastest teams use these tools to handle boilerplate and exploration, then apply the same review standards they always have. The tool saves you time; your judgment keeps the codebase healthy.",
    ],
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini: Which Assistant Wins in 2026?",
    excerpt:
      "Three frontier assistants, one showdown. We compare reasoning, context, coding and pricing to help you pick the right one.",
    category: "Chat",
    author: "Nexus Team",
    date: "2026-07-15",
    readingTime: 7,
    hue: 265,
    body: [
      "ChatGPT, Claude and Gemini are the three assistants most teams choose between in 2026. They overlap far more than they differ, but the gaps matter once you start using them for real work.",
      "Claude leads on long-document analysis and careful, well-structured writing, helped by its large context window. ChatGPT is the most flexible all-rounder, with the deepest ecosystem of plugins, custom GPTs and integrations. Gemini stands out for native multimodality and tight Google Workspace ties.",
      "For coding, all three are strong, but Cursor and GitHub Copilot wrap these models in a better developer experience. If you mostly chat in a browser, pick by feel and price; if you build software, lean on a dedicated coding tool instead.",
    ],
  },
  {
    slug: "ai-image-generators-compared",
    title: "AI Image Generators Compared: Midjourney and Beyond",
    excerpt:
      "Midjourney sets the bar for quality, but it is not the only option. Here is how the leading image tools compare.",
    category: "Image",
    author: "Nexus Team",
    date: "2026-07-08",
    readingTime: 6,
    hue: 320,
    body: [
      "AI image generation has matured fast. The best tools now deliver consistent subjects, style references and near-photoreal output, but each takes a different approach to control and quality.",
      "Midjourney still leads on aesthetics, producing painterly, cinematic images that need little post-processing. It is a paid product, though, and the prompt craft has a real learning curve.",
      "For teams that need editable, on-brand visuals, design-focused tools like v0 and Canva's AI suite are often a better fit than a pure generator. Match the tool to the job: art and concepts favor Midjourney, while production UI favors design tooling.",
    ],
  },
  {
    slug: "building-ai-agents-guide",
    title: "A Practical Guide to Building Your First AI Agent",
    excerpt:
      "Agents sound magical until you build one. This guide walks through the architecture, tools and guardrails that actually work.",
    category: "Agents",
    author: "Nexus Team",
    date: "2026-06-30",
    readingTime: 9,
    hue: 280,
    body: [
      "An AI agent is a model paired with tools, memory and a loop that decides what to do next. The hype hides a simple truth: most production agents are carefully scoped workflows with good error handling, not open-ended magic.",
      "Start small. Give the agent a single, well-defined goal and two or three reliable tools. Log every step so you can debug failures, and add explicit guardrails, human confirmation for destructive actions, timeouts, and spending limits.",
      "Memory and retrieval matter more than model choice for most tasks. A focused knowledge base and clean tool descriptions will outperform a bigger model every time. Ship the simplest agent that works, then expand its reach gradually.",
    ],
  },
  {
    slug: "ai-automation-workflows",
    title: "How to Automate Your Workflow with AI (No-Code)",
    excerpt:
      "You do not need to write code to automate with AI. Here is how to connect your stack with visual automation platforms.",
    category: "Automation",
    author: "Nexus Team",
    date: "2026-06-22",
    readingTime: 6,
    hue: 190,
    body: [
      "No-code automation platforms have absorbed AI deeply. Tools like Make let you chain models, APIs and apps into visual scenarios that run on a schedule or a webhook, no engineering required.",
      "The winning pattern is boring and reliable: trigger an automation on an event, let an AI step classify or summarize the data, then route it to the right tool. Keep each step small and testable so failures are easy to spot.",
      "Watch your costs and execution limits. AI steps are expensive compared to plain data moves, so cache results and only call a model when a simple rule will not do. Done well, automation removes hours of repetitive work each week.",
    ],
  },
  {
    slug: "free-ai-tools-for-startups",
    title: "Free AI Tools Every Startup Should Try",
    excerpt:
      "Budget tight? These capable AI tools offer real free tiers so early-stage teams can move fast without spending.",
    category: "Productivity",
    author: "Nexus Team",
    date: "2026-06-14",
    readingTime: 7,
    hue: 150,
    body: [
      "Startups need leverage, and AI is the cheapest leverage available in 2026. Many top tools offer genuinely useful free tiers, enough to validate an idea or run a small team.",
      "ChatGPT, Claude, Gemini and Perplexity all have free plans that cover everyday writing, research and analysis. For code, GitHub Copilot's free tier and Cursor's hobby plan are great starting points before you commit to paid seats.",
      "The trick is limits. Free tiers cap usage, so instrument your workflows early and upgrade the one or two tools that actually move the needle. Spending a little on the right tool beats spreading budget across a dozen you barely use.",
    ],
  },
];

const bySlug = new Map(posts.map((p) => [p.slug, p]));

/** Every post, newest first. */
export function getAllPosts(): Post[] {
  return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return bySlug.get(slug);
}

/** Most recent posts, newest first. */
export function getRecentPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, limit);
}
