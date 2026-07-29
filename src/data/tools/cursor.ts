import type { Tool } from "../types";

const cursor: Tool = {
  id: "cursor",
  slug: "cursor",
  name: "Cursor",
  logo: "/logos/cursor.svg",
  coverImage: "/covers/cursor.svg",
  developer: "Anysphere",
  officialWebsite: "https://cursor.com",
  affiliateLink: "https://cursor.com/?ref=nexus",
  category: "coding",
  tags: ["code-assistant", "claude", "gpt-4", "api", "freemium"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Basic AI completions with usage limits." },
      { name: "Pro", price: 20, currency: "USD", period: "month", description: "More fast requests and premium model access." },
      { name: "Business", price: 40, currency: "USD", period: "month", description: "Per user. Admin controls and team billing." },
    ],
  },
  rating: 4.6,
  featured: true,
  publishDate: "2023-03-14",
  lastUpdated: "2026-07-01",
  shortDescription: "The AI-first code editor that pairs whole-codebase context with frontier models.",
  description:
    "Cursor is an AI-powered code editor built on VS Code that integrates frontier models like GPT-4 and Claude directly into your workflow. It understands your whole codebase, can reference multiple files at once, and helps you write, refactor and debug faster. With features like Tab autocomplete and inline edits, it is designed to keep developers in flow.",
  features: [
    "Whole-codebase AI context",
    "Tab autocomplete",
    "Multi-file edits and refactors",
    "Choice of frontier models",
    "VS Code extension compatibility",
  ],
  pros: [
    "Whole-codebase awareness across files",
    "Frontier model choice (GPT-4, Claude)",
    "Familiar VS Code extension compatibility",
    "Fast inline completions and refactors",
  ],
  cons: [
    "Best features gated behind paid plans",
    "Heavier on resources than plain editors",
    "Learning curve for advanced agent features",
  ],
  screenshots: [
    "/screenshots/cursor-1.svg",
    "/screenshots/cursor-2.svg",
    "/screenshots/cursor-3.svg",
  ],
  recommendedTools: ["chatgpt", "claude"],
  recommendedServices: ["ai-coding"],
  seoTitle: "Cursor AI Code Editor - Features, Pricing & Review | Nexus",
  seoDescription:
    "Review of the Cursor AI code editor: codebase-aware AI, pricing tiers, pros and cons, and who it is best for.",
};

export default cursor;
