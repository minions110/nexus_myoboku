import type { Tool } from "../types";

const githubCopilot: Tool = {
  id: "github-copilot",
  slug: "github-copilot",
  name: "GitHub Copilot",
  logo: "/logos/github-copilot.svg",
  coverImage: "/covers/github-copilot.svg",
  developer: "GitHub",
  officialWebsite: "https://github.com/features/copilot",
  affiliateLink: "https://github.com/features/copilot?ref=nexus",
  category: "coding",
  tags: ["code-assistant", "api", "enterprise", "multilingual"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Limited monthly completions and chat for individuals." },
      { name: "Pro", price: 10, currency: "USD", period: "month", description: "More completions, chat and premium model requests." },
      { name: "Business", price: 19, currency: "USD", period: "month", description: "Per user. Policy management and organization controls." },
      { name: "Enterprise", price: 39, currency: "USD", period: "month", description: "Per user. Deepest GitHub integration and enterprise security." },
    ],
  },
  rating: 4.5,
  featured: true,
  publishDate: "2021-06-29",
  lastUpdated: "2026-07-15",
  shortDescription: "AI pair programmer that suggests code inline across your editor and GitHub.",
  description:
    "GitHub Copilot is an AI pair programmer that suggests code and chat assistance directly inside your IDE, on the command line and across GitHub. Backed by GitHub's code understanding and enterprise-grade access controls, it helps individuals write code faster and lets organizations roll out AI coding safely at scale.",
  features: [
    "Inline code suggestions",
    "Copilot Chat in the IDE",
    "Pull request summaries and reviews",
    "Multi-file context awareness",
    "Command-line assistance",
  ],
  pros: [
    "Tight, trusted GitHub integration",
    "Broad language and IDE support",
    "Strong enterprise security and policy controls",
    "PR and CLI features beyond the editor",
  ],
  cons: [
    "Suggestions can feel generic on niche code",
    "Best value tied to a GitHub plan",
    "Privacy review needed for some organizations",
  ],
  screenshots: [
    "/screenshots/github-copilot-1.svg",
    "/screenshots/github-copilot-2.svg",
    "/screenshots/github-copilot-3.svg",
  ],
  recommendedTools: ["cursor", "chatgpt"],
  recommendedServices: ["ai-coding"],
  seoTitle: "GitHub Copilot - Features, Pricing & Review | Nexus",
  seoDescription:
    "A review of GitHub Copilot: inline suggestions, chat, pricing tiers, pros and cons, and how it fits enterprise coding workflows.",
};

export default githubCopilot;
