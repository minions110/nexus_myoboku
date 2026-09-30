import type { Tool } from "../types";

const perplexity: Tool = {
  id: "perplexity",
  slug: "perplexity",
  name: "Perplexity",
  logo: "/logos/perplexity.svg",
  coverImage: "/covers/perplexity.svg",
  developer: "Perplexity AI",
  officialWebsite: "https://perplexity.ai",
  category: "search",
  tags: ["rag", "multilingual", "api", "free-plan", "realtime"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Unlimited basic searches with daily Pro queries." },
      { name: "Pro", price: 20, currency: "USD", period: "month", description: "More Pro searches, file uploads and model choice." },
      { name: "Enterprise", price: 40, currency: "USD", period: "month", description: "Per seat. Admin controls and data retention." },
    ],
  },
  rating: 4.5,
  featured: false,
  publishDate: "2022-12-07",
  lastUpdated: "2026-07-01",
  shortDescription: "An AI-powered answer engine that cites live web sources for every response.",
  description:
    "Perplexity is an AI answer engine that combines large language models with real-time web search. Instead of plain search results, it returns concise, sourced answers with citations, making research faster and more transparent. It supports follow-up questions, focus modes and file analysis, with Pro access to frontier models.",
  features: [
    "Cited answers from live web",
    "Focus modes for academic, video and more",
    "Follow-up questions with context",
    "File upload and analysis",
    "Pro access to frontier models",
  ],
  pros: [
    "Answers with transparent, clickable citations",
    "Real-time web access for current information",
    "Focus modes for academic, video and other sources",
    "Clean, fast research experience",
  ],
  cons: [
    "Citations occasionally point to weak sources",
    "Pro queries are limited on the free tier",
    "Less suited for creative long-form writing",
  ],
  screenshots: [
    "/screenshots/perplexity-1.svg",
    "/screenshots/perplexity-2.svg",
    "/screenshots/perplexity-3.svg",
  ],
  recommendedTools: ["chatgpt", "claude"],
  recommendedServices: ["ai-automation"],
  seoTitle: "Perplexity AI - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Perplexity AI: how its cited answers work, pricing, pros and cons, and when to choose it over a chatbot.",
};

export default perplexity;
