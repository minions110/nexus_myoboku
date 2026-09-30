import type { Tool } from "../types";

const gemini: Tool = {
  id: "gemini",
  slug: "gemini",
  name: "Gemini",
  logo: "/logos/gemini.svg",
  coverImage: "/covers/gemini.svg",
  developer: "Google",
  officialWebsite: "https://gemini.google.com",
  affiliateLink: "https://gemini.google.com/?ref=nexus",
  category: "chat",
  tags: ["multilingual", "vision", "api", "free-plan"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Gemini across text, images and code with daily limits." },
      { name: "Google AI Pro", price: 19.99, currency: "USD", period: "month", description: "Gemini Advanced, more storage and deeper Workspace integration." },
    ],
  },
  rating: 4.6,
  featured: true,
  publishDate: "2023-12-06",
  lastUpdated: "2026-07-22",
  shortDescription: "Google's multimodal AI assistant with deep integration across Workspace and Android.",
  description:
    "Gemini is Google's multimodal AI assistant, capable of reasoning across text, images, audio and video. It pairs frontier reasoning with native Google integration, powering features inside Workspace, Android and Search. With a very large context window and built-in code execution, it is built for both everyday tasks and complex, multi-step work.",
  features: [
    "Native multimodal understanding",
    "Very large context window",
    "Google Workspace integration",
    "Code execution and analysis",
    "Grounding with Google Search",
  ],
  pros: [
    "Strong multimodal capabilities out of the box",
    "Tight Google ecosystem integration",
    "Generous free tier",
    "Live web grounding for current facts",
  ],
  cons: [
    "Best features require a paid plan",
    "Feature availability varies by region",
    "Occasional factual slip-ups on niche topics",
  ],
  screenshots: [
    "/screenshots/gemini-1.svg",
    "/screenshots/gemini-2.svg",
    "/screenshots/gemini-3.svg",
  ],
  recommendedTools: ["chatgpt", "claude", "perplexity"],
  recommendedServices: ["ai-automation"],
  seoTitle: "Gemini (Google) - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Google Gemini: multimodal capabilities, context window, pricing, pros and cons, and how it compares to ChatGPT and Claude.",
};

export default gemini;
