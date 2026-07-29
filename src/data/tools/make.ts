import type { Tool } from "../types";

const make: Tool = {
  id: "make",
  slug: "make",
  name: "Make",
  logo: "/logos/make.svg",
  coverImage: "/covers/make.svg",
  developer: "Make",
  officialWebsite: "https://www.make.com",
  affiliateLink: "https://www.make.com/?ref=nexus",
  category: "automation",
  tags: ["no-code", "api", "multilingual", "enterprise"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Limited operations and scenarios to get started." },
      { name: "Core", price: 9, currency: "USD", period: "month", description: "More operations, schedules and full history." },
      { name: "Pro", price: 16, currency: "USD", period: "month", description: "Higher limits and advanced routing." },
      { name: "Teams", price: 29, currency: "USD", period: "month", description: "Collaboration and role-based access." },
    ],
  },
  rating: 4.4,
  featured: false,
  publishDate: "2020-05-01",
  lastUpdated: "2026-07-05",
  shortDescription: "Visual no-code automation platform to connect apps and orchestrate AI workflows.",
  description:
    "Make is a visual automation platform that connects 1800+ apps into multi-step scenarios, with native AI steps for classification, summarization and generation. Its drag-and-drop builder, branching and error handling make it powerful enough for complex workflows while staying accessible to non-developers.",
  features: [
    "Visual scenario builder",
    "1800+ app integrations",
    "Native AI steps and agents",
    "Schedules, webhooks and filters",
    "Robust error handling and routing",
  ],
  pros: [
    "Powerful, flexible visual builder",
    "Huge integration library",
    "Generous free tier",
    "Fine-grained routing and logic",
  ],
  cons: [
    "Complex scenarios can get pricey",
    "Learning curve for advanced flows",
    "Execution operation limits apply",
  ],
  screenshots: [
    "/screenshots/make-1.svg",
    "/screenshots/make-2.svg",
    "/screenshots/make-3.svg",
  ],
  recommendedTools: [],
  recommendedServices: ["ai-automation"],
  seoTitle: "Make (Automation) - Features, Pricing & Review | Nexus",
  seoDescription:
    "A review of Make: visual automation, integrations, AI steps, pricing tiers, pros and cons, and best use cases.",
};

export default make;
