import type { Tool } from "../types";

const elevenlabs: Tool = {
  id: "elevenlabs",
  slug: "elevenlabs",
  name: "ElevenLabs",
  logo: "/logos/elevenlabs.svg",
  coverImage: "/covers/elevenlabs.svg",
  developer: "ElevenLabs",
  officialWebsite: "https://elevenlabs.io",
  affiliateLink: "https://elevenlabs.io/?ref=nexus",
  category: "audio",
  tags: ["voice", "api", "multilingual", "free-plan"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Monthly character quota for text-to-speech." },
      { name: "Starter", price: 5, currency: "USD", period: "month", description: "More characters and a voice library." },
      { name: "Creator", price: 22, currency: "USD", period: "month", description: "Higher limits, dubbing and commercial rights." },
      { name: "Pro", price: 99, currency: "USD", period: "month", description: "Maximum capacity and professional features." },
    ],
  },
  rating: 4.6,
  featured: false,
  publishDate: "2022-01-10",
  lastUpdated: "2026-06-08",
  shortDescription: "Realistic AI text-to-speech, voice cloning and dubbing in 30+ languages.",
  description:
    "ElevenLabs is a voice AI platform known for its highly natural text-to-speech, voice cloning and multilingual dubbing. Creators use it to narrate videos, produce audiobooks and localize content, while developers integrate the same voices via API. A broad voice library and granular controls make it a leader in synthetic speech.",
  features: [
    "Ultra-realistic text-to-speech",
    "Voice cloning",
    "Multilingual dubbing",
    "Voice library marketplace",
    "Developer API",
  ],
  pros: [
    "Best-in-class voice quality",
    "Fast, convincing voice cloning",
    "Broad language coverage",
    "Solid, well-documented API",
  ],
  cons: [
    "Voice cloning raises ethical limits",
    "Free tier is limited",
    "Higher tiers get expensive quickly",
  ],
  screenshots: [
    "/screenshots/elevenlabs-1.svg",
    "/screenshots/elevenlabs-2.svg",
    "/screenshots/elevenlabs-3.svg",
  ],
  recommendedTools: ["suno"],
  recommendedServices: ["ai-automation"],
  seoTitle: "ElevenLabs - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of ElevenLabs: text-to-speech quality, voice cloning, pricing tiers, pros and cons, and best use cases.",
};

export default elevenlabs;
