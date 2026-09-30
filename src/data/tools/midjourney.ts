import type { Tool } from "../types";

const midjourney: Tool = {
  id: "midjourney",
  slug: "midjourney",
  name: "Midjourney",
  logo: "/logos/midjourney.svg",
  coverImage: "/covers/midjourney.svg",
  developer: "Midjourney",
  officialWebsite: "https://midjourney.com",
  affiliateLink: "https://midjourney.com/?ref=nexus",
  category: "image",
  tags: ["image-generation", "api"],
  pricing: {
    model: "paid",
    startingPrice: 10,
    currency: "USD",
    freeTrial: false,
    plans: [
      { name: "Basic", price: 10, currency: "USD", period: "month", description: "Limited monthly GPU time and image generations." },
      { name: "Standard", price: 30, currency: "USD", period: "month", description: "More GPU time plus relaxed generations." },
      { name: "Pro", price: 60, currency: "USD", period: "month", description: "Maximum fast hours and stealth mode." },
    ],
  },
  rating: 4.7,
  featured: true,
  publishDate: "2022-07-12",
  lastUpdated: "2026-06-24",
  shortDescription: "High-fidelity AI image generator known for its painterly, cinematic aesthetics.",
  description:
    "Midjourney is an AI image generator celebrated for its distinctive, highly aesthetic output. It turns text prompts into striking visuals with strong composition and lighting, and offers style references and character consistency for more controlled results. Available on the web and via Discord, it is a favorite among designers, artists and marketers.",
  features: [
    "High-fidelity, cinematic image generation",
    "Style and image references",
    "Character consistency across images",
    "Variations and upscaling",
    "Web and Discord access",
  ],
  pros: [
    "Best-in-class image quality and aesthetics",
    "Strong, recognizable artistic style",
    "Active, inspiring community",
    "Fast iteration with variations",
  ],
  cons: [
    "No free tier",
    "Prompt craft has a real learning curve",
    "Content filters can be strict",
  ],
  screenshots: [
    "/screenshots/midjourney-1.svg",
    "/screenshots/midjourney-2.svg",
    "/screenshots/midjourney-3.svg",
  ],
  recommendedTools: [],
  recommendedServices: ["ai-design"],
  seoTitle: "Midjourney - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Midjourney: image quality, style references, pricing tiers, pros and cons, and who it is best for.",
};

export default midjourney;
