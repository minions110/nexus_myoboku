import type { Tool } from "../types";

const claude: Tool = {
  id: "claude",
  slug: "claude",
  name: "Claude",
  logo: "/logos/claude.svg",
  coverImage: "/covers/claude.svg",
  developer: "Anthropic",
  officialWebsite: "https://claude.ai",
  category: "chat",
  tags: ["claude", "chatbot", "multilingual", "vision", "api", "free-plan"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Limited daily messages with Claude." },
      { name: "Pro", price: 20, currency: "USD", period: "month", description: "More usage, priority access and newer models." },
      { name: "Team", price: 30, currency: "USD", period: "month", description: "Per user. Shared chats and admin controls." },
      { name: "Enterprise", price: 0, currency: "USD", period: "custom", description: "Contact sales. SSO, SCIM and higher limits." },
    ],
  },
  rating: 4.7,
  featured: true,
  publishDate: "2023-03-14",
  lastUpdated: "2026-07-01",
  shortDescription: "Anthropic's helpful, harmless and honest AI assistant with a large context window.",
  description:
    "Claude is an AI assistant built by Anthropic, designed to be helpful, harmless and honest. It excels at long-document analysis, thoughtful writing and coding, and supports a very large context window for working with lengthy material. Claude is available via the web, an API and partner integrations, with a strong emphasis on safety and reliability.",
  features: [
    "200K+ token context window",
    "Document analysis and summarization",
    "Thoughtful long-form writing",
    "Vision and image understanding",
    "Tool use and function calling",
  ],
  pros: [
    "Industry-leading context window for long documents",
    "Nuanced, well-structured writing",
    "Strong safety and alignment practices",
    "Reliable coding and analysis",
  ],
  cons: [
    "Tighter free-tier message limits",
    "Fewer third-party plugins than some rivals",
    "No native web browsing on every plan",
  ],
  screenshots: [
    "/screenshots/claude-1.svg",
    "/screenshots/claude-2.svg",
    "/screenshots/claude-3.svg",
  ],
  recommendedTools: ["chatgpt", "perplexity", "cursor"],
  recommendedServices: ["ai-agents", "ai-coding"],
  seoTitle: "Claude (Anthropic) - Features, Pricing & Review | Nexus",
  seoDescription:
    "A hands-on review of Claude by Anthropic: context window, pricing, strengths and weaknesses, and how it compares to ChatGPT.",
};

export default claude;
