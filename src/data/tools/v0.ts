import type { Tool } from "../types";

const v0: Tool = {
  id: "v0",
  slug: "v0",
  name: "v0",
  logo: "/logos/v0.svg",
  coverImage: "/covers/v0.svg",
  developer: "Vercel",
  officialWebsite: "https://v0.dev",
  affiliateLink: "https://v0.dev/?ref=nexus",
  category: "design",
  tags: ["no-code", "code-assistant", "api"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Limited monthly generations to build UI." },
      { name: "Premium", price: 20, currency: "USD", period: "month", description: "More generations and private projects." },
      { name: "Enterprise", price: 0, currency: "USD", period: "custom", description: "Contact sales. SSO, scale and support." },
    ],
  },
  rating: 4.4,
  featured: false,
  publishDate: "2023-10-24",
  lastUpdated: "2026-07-20",
  shortDescription: "Generative UI tool that turns prompts into production-ready React + Tailwind code.",
  description:
    "v0 by Vercel is a generative UI tool that converts natural-language prompts into clean, production-minded React and Tailwind code. It iterates on components, imports from Figma and deploys to Vercel in a click, making it a fast way to scaffold frontends and design systems without starting from a blank file.",
  features: [
    "Prompt-to-UI generation",
    "React and Tailwind export",
    "Reusable component library",
    "Figma import",
    "One-click Vercel deploy",
  ],
  pros: [
    "Ships usable frontend fast",
    "Clean React and Tailwind output",
    "Tight Vercel deploy integration",
    "Iterative, conversational editing",
  ],
  cons: [
    "Best for UI scaffolding, not full apps",
    "Output needs polish for production",
    "Free generations are limited",
  ],
  screenshots: [
    "/screenshots/v0-1.svg",
    "/screenshots/v0-2.svg",
    "/screenshots/v0-3.svg",
  ],
  recommendedTools: ["cursor", "github-copilot"],
  recommendedServices: ["ai-design", "ai-coding"],
  seoTitle: "v0 by Vercel - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of v0 by Vercel: generative UI, React and Tailwind export, pricing tiers, pros and cons, and best use cases.",
};

export default v0;
