import type { Tool } from "../types";

const runway: Tool = {
  id: "runway",
  slug: "runway",
  name: "Runway",
  logo: "/logos/runway.svg",
  coverImage: "/covers/runway.svg",
  developer: "Runway",
  officialWebsite: "https://runwayml.com",
  affiliateLink: "https://runwayml.com/?ref=nexus",
  category: "video",
  tags: ["video-generation", "image-generation", "api"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Limited credits to try generation tools." },
      { name: "Standard", price: 15, currency: "USD", period: "month", description: "More credits and higher resolution exports." },
      { name: "Pro", price: 35, currency: "USD", period: "month", description: "Maximum credits and pro creative controls." },
      { name: "Enterprise", price: 0, currency: "USD", period: "custom", description: "Contact sales. Custom limits and support." },
    ],
  },
  rating: 4.4,
  featured: true,
  publishDate: "2020-12-01",
  lastUpdated: "2026-07-02",
  shortDescription: "AI video generation and editing suite for creators and filmmakers.",
  description:
    "Runway is an AI video platform that turns text and images into video, plus a full suite of creative editing tools. Its generative models produce short clips from prompts or stills, while director-style controls, green screen and frame interpolation give filmmakers real post-production power in the browser.",
  features: [
    "Text and image to video generation",
    "Motion Brush for directed movement",
    "Director and camera controls",
    "Green screen and inpainting",
    "Frame interpolation and upscaling",
  ],
  pros: [
    "Pioneering, constantly improving video models",
    "Pro-grade creative controls",
    "Cloud-based, no heavy local hardware",
    "Useful free tier to experiment",
  ],
  cons: [
    "Generation credits run out quickly",
    "High-resolution outputs are paid",
    "Complex clips can take time to render",
  ],
  screenshots: [
    "/screenshots/runway-1.svg",
    "/screenshots/runway-2.svg",
    "/screenshots/runway-3.svg",
  ],
  recommendedTools: ["synthesia"],
  recommendedServices: ["ai-design"],
  seoTitle: "Runway AI Video - Features, Pricing & Review | Nexus",
  seoDescription:
    "A review of Runway: AI video generation, creative controls, pricing tiers, pros and cons, and who it is best for.",
};

export default runway;
