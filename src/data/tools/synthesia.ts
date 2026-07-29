import type { Tool } from "../types";

const synthesia: Tool = {
  id: "synthesia",
  slug: "synthesia",
  name: "Synthesia",
  logo: "/logos/synthesia.svg",
  coverImage: "/covers/synthesia.svg",
  developer: "Synthesia",
  officialWebsite: "https://www.synthesia.io",
  affiliateLink: "https://www.synthesia.io/?ref=nexus",
  category: "video",
  tags: ["video-generation", "no-code", "multilingual", "enterprise"],
  pricing: {
    model: "paid",
    startingPrice: 18,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Starter", price: 18, currency: "USD", period: "month", description: "AI avatars, templates and a monthly video quota." },
      { name: "Creator", price: 64, currency: "USD", period: "month", description: "More avatars, longer videos and brand assets." },
      { name: "Enterprise", price: 0, currency: "USD", period: "custom", description: "Contact sales. Custom avatars and scale." },
    ],
  },
  rating: 4.3,
  featured: false,
  publishDate: "2020-08-01",
  lastUpdated: "2026-06-18",
  shortDescription: "Create professional AI videos with avatars and voiceovers from text - no camera needed.",
  description:
    "Synthesia turns scripts into polished videos using AI avatars and voiceovers, no filming required. With 230+ avatars and 140+ languages, it is popular for training, onboarding and internal comms. An easy editor plus templates let L&D and marketing teams produce localized video at scale.",
  features: [
    "230+ AI avatars",
    "140+ languages and voices",
    "Custom avatars",
    "Templates and scenes",
    "Automatic translations",
  ],
  pros: [
    "No-film video production",
    "Excellent for training and L&D",
    "Strong localization out of the box",
    "Simple, approachable editor",
  ],
  cons: [
    "Avatars can look slightly stiff",
    "Pricing scales per seat",
    "Less suited for cinematic content",
  ],
  screenshots: [
    "/screenshots/synthesia-1.svg",
    "/screenshots/synthesia-2.svg",
    "/screenshots/synthesia-3.svg",
  ],
  recommendedTools: ["runway"],
  recommendedServices: [],
  seoTitle: "Synthesia AI Video - Features, Pricing & Review | Nexus",
  seoDescription:
    "A review of Synthesia: AI avatars, languages, pricing tiers, pros and cons, and best use cases for video creation.",
};

export default synthesia;
