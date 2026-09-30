import type { Tool } from "../types";

const jasper: Tool = {
  id: "jasper",
  slug: "jasper",
  name: "Jasper",
  logo: "/logos/jasper.svg",
  coverImage: "/covers/jasper.svg",
  developer: "Jasper",
  officialWebsite: "https://www.jasper.ai",
  affiliateLink: "https://www.jasper.ai/?ref=nexus",
  category: "writing",
  tags: ["multilingual", "enterprise", "no-code"],
  pricing: {
    model: "paid",
    startingPrice: 39,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Creator", price: 39, currency: "USD", period: "month", description: "Single seat for drafting and brand voice." },
      { name: "Pro", price: 59, currency: "USD", period: "month", description: "Multiple seats, campaigns and integrations." },
      { name: "Business", price: 0, currency: "USD", period: "custom", description: "Contact sales. SSO, custom branding and limits." },
    ],
  },
  rating: 4.2,
  featured: false,
  publishDate: "2021-01-15",
  lastUpdated: "2026-06-20",
  shortDescription: "AI writing platform for marketing teams to create on-brand content at scale.",
  description:
    "Jasper is an AI writing platform built for marketers. It focuses on on-brand content at scale, with brand voice, campaign workflows, marketing templates and SEO mode. For teams that produce a steady stream of copy, Jasper adds structure and consistency on top of general-purpose AI models.",
  features: [
    "Brand voice training",
    "Marketing templates and campaigns",
    "SEO mode for search-minded content",
    "Team collaboration and approvals",
    "Browser extension",
  ],
  pros: [
    "Strong marketing templates and workflows",
    "Consistent brand voice across content",
    "Built for team collaboration",
    "Helpful SEO guidance",
  ],
  cons: [
    "Pricey for solo creators",
    "Output still needs editing",
    "Overlaps with general chatbots for simple tasks",
  ],
  screenshots: [
    "/screenshots/jasper-1.svg",
    "/screenshots/jasper-2.svg",
    "/screenshots/jasper-3.svg",
  ],
  recommendedTools: ["chatgpt", "claude"],
  recommendedServices: [],
  seoTitle: "Jasper AI - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Jasper AI: brand voice, marketing templates, pricing tiers, pros and cons, and who it is best for.",
};

export default jasper;
