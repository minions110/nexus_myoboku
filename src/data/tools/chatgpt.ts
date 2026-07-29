import type { Tool } from "../types";

const chatgpt: Tool = {
  id: "chatgpt",
  slug: "chatgpt",
  name: "ChatGPT",
  logo: "/logos/chatgpt.svg",
  coverImage: "/covers/chatgpt.svg",
  developer: "OpenAI",
  officialWebsite: "https://chat.openai.com",
  category: "chat",
  tags: ["gpt-4", "chatbot", "multilingual", "vision", "api", "free-plan"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Access to GPT-4o mini with usage limits." },
      { name: "Plus", price: 20, currency: "USD", period: "month", description: "Higher limits, GPT-4o, DALL·E and priority access." },
      { name: "Team", price: 25, currency: "USD", period: "month", description: "Per user. Shared workspace and admin controls." },
      { name: "Enterprise", price: 0, currency: "USD", period: "custom", description: "Contact sales. SSO, SCIM and expanded context." },
    ],
  },
  rating: 4.8,
  featured: true,
  publishDate: "2022-11-30",
  lastUpdated: "2026-07-01",
  shortDescription: "OpenAI's flagship conversational AI for writing, coding, analysis and multimodal tasks.",
  description:
    "ChatGPT is a general-purpose AI assistant developed by OpenAI. It powers natural-language conversations, drafting, coding help, data analysis and image understanding, and is available on the web, mobile and via API. With GPT-4o it handles text, voice and vision in a single model, making it a versatile starting point for individuals and teams adopting AI.",
  features: [
    "Conversational AI across text, voice and vision",
    "Code generation and debugging",
    "Data analysis with file uploads",
    "Custom GPTs and assistants",
    "DALL·E image generation",
  ],
  pros: [
    "Excellent general-purpose reasoning and writing",
    "Strong multimodal support (text, voice, vision)",
    "Generous free tier and broad device coverage",
    "Large ecosystem of plugins, GPTs and API integrations",
  ],
  cons: [
    "Knowledge can lag behind recent events",
    "Usage limits on the free and Plus tiers",
    "Occasional hallucinations requiring verification",
  ],
  screenshots: [
    "/screenshots/chatgpt-1.svg",
    "/screenshots/chatgpt-2.svg",
    "/screenshots/chatgpt-3.svg",
  ],
  recommendedTools: ["claude", "perplexity"],
  recommendedServices: ["ai-agents", "ai-automation"],
  seoTitle: "ChatGPT (OpenAI) - Features, Pricing & Review | Nexus",
  seoDescription:
    "An in-depth look at ChatGPT by OpenAI: features, pricing tiers, pros and cons, and how it compares to other AI chat assistants.",
};

export default chatgpt;
