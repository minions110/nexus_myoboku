import type { Tool } from "../types";

const notionAi: Tool = {
  id: "notion-ai",
  slug: "notion-ai",
  name: "Notion AI",
  logo: "/logos/notion-ai.svg",
  coverImage: "/covers/notion-ai.svg",
  developer: "Notion",
  officialWebsite: "https://www.notion.so/product/ai",
  affiliateLink: "https://www.notion.so/product/ai?ref=nexus",
  category: "productivity",
  tags: ["no-code", "multilingual", "summarization"],
  pricing: {
    model: "paid",
    startingPrice: 8,
    currency: "USD",
    freeTrial: false,
    plans: [
      { name: "AI Add-on", price: 8, currency: "USD", period: "month", description: "Per member. AI Q&A, writing and summaries across your workspace." },
    ],
  },
  rating: 4.3,
  featured: true,
  publishDate: "2023-02-22",
  lastUpdated: "2026-06-28",
  shortDescription: "AI built into Notion that writes, summarizes and searches across your workspace.",
  description:
    "Notion AI brings writing, summarization and workspace-aware search directly into Notion. Because it understands your pages, databases and docs, it can answer questions grounded in your own knowledge base, draft and rewrite content, and auto-fill properties, making it a natural fit for teams already living in Notion.",
  features: [
    "Workspace-aware Q&A",
    "Summarize pages and meeting notes",
    "Auto-fill database properties",
    "Translate and rewrite",
    "Draft from prompts",
  ],
  pros: [
    "Deeply integrated into Notion",
    "Great for docs, notes and knowledge bases",
    "Answers grounded in your own content",
    "Clean, familiar UX",
  ],
  cons: [
    "Mostly useful within Notion",
    "Add-on cost applies per seat",
    "Less capable than frontier standalone chatbots",
  ],
  screenshots: [
    "/screenshots/notion-ai-1.svg",
    "/screenshots/notion-ai-2.svg",
    "/screenshots/notion-ai-3.svg",
  ],
  recommendedTools: ["chatgpt", "claude"],
  recommendedServices: ["ai-automation"],
  seoTitle: "Notion AI - Features, Pricing & Review | Nexus",
  seoDescription:
    "A review of Notion AI: workspace Q&A, writing and summaries, pricing, pros and cons, and who benefits most.",
};

export default notionAi;
