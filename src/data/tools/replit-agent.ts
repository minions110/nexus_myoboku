import type { Tool } from "../types";

const replitAgent: Tool = {
  id: "replit-agent",
  slug: "replit-agent",
  name: "Replit Agent",
  logo: "/logos/replit-agent.svg",
  coverImage: "/covers/replit-agent.svg",
  developer: "Replit",
  officialWebsite: "https://replit.com",
  affiliateLink: "https://replit.com/?ref=nexus",
  category: "agents",
  tags: ["code-assistant", "api", "no-code", "multilingual"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Community resources to try the agent." },
      { name: "Core", price: 20, currency: "USD", period: "month", description: "More compute, private repls and faster agents." },
      { name: "Teams", price: 0, currency: "USD", period: "custom", description: "Contact sales. Collaboration and org controls." },
    ],
  },
  rating: 4.2,
  featured: false,
  publishDate: "2024-09-05",
  lastUpdated: "2026-07-09",
  shortDescription: "Autonomous AI agent that builds and deploys full apps from a prompt in the browser.",
  description:
    "Replit Agent is an autonomous AI that builds, runs and deploys complete applications from a natural-language prompt, all inside Replit's cloud development environment. It scaffolds projects, writes across multiple files, previews live and ships to hosting with one click, making it ideal for prototyping and greenfield builds.",
  features: [
    "Prompt-to-app generation",
    "Cloud development environment",
    "One-click deploy and hosting",
    "Live preview and iteration",
    "Multi-file project creation",
  ],
  pros: [
    "Builds whole apps remarkably fast",
    "Runs entirely in the browser",
    "Built-in hosting and deploy",
    "Great for prototypes and MVPs",
  ],
  cons: [
    "Complex apps need manual iteration",
    "Resource limits on the free tier",
    "Less control than a local dev setup",
  ],
  screenshots: [
    "/screenshots/replit-agent-1.svg",
    "/screenshots/replit-agent-2.svg",
    "/screenshots/replit-agent-3.svg",
  ],
  recommendedTools: ["cursor", "github-copilot"],
  recommendedServices: ["ai-coding", "ai-agents"],
  seoTitle: "Replit Agent - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Replit Agent: prompt-to-app building, deployment, pricing tiers, pros and cons, and best use cases.",
};

export default replitAgent;
