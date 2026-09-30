import type { Tool } from "../types";

const suno: Tool = {
  id: "suno",
  slug: "suno",
  name: "Suno",
  logo: "/logos/suno.svg",
  coverImage: "/covers/suno.svg",
  developer: "Suno",
  officialWebsite: "https://suno.com",
  affiliateLink: "https://suno.com/?ref=nexus",
  category: "audio",
  tags: ["voice", "multilingual", "free-plan"],
  pricing: {
    model: "freemium",
    startingPrice: 0,
    currency: "USD",
    freeTrial: true,
    plans: [
      { name: "Free", price: 0, currency: "USD", period: "month", description: "Daily song credits with attribution." },
      { name: "Pro", price: 10, currency: "USD", period: "month", description: "More credits and commercial rights." },
      { name: "Premier", price: 30, currency: "USD", period: "month", description: "Maximum credits for frequent creators." },
    ],
  },
  rating: 4.5,
  featured: false,
  publishDate: "2023-12-20",
  lastUpdated: "2026-07-18",
  shortDescription: "Generate full songs with vocals and instrumentation from a text prompt.",
  description:
    "Suno generates complete songs, including vocals and instrumentation, from a simple text prompt. It supports genre and style control, song extensions and a mobile app, making music creation accessible to non-musicians. Commercial use requires a paid plan, but the free tier is genuinely fun for experimentation.",
  features: [
    "Text-to-song generation",
    "Vocal and instrumental synthesis",
    "Genre and style control",
    "Song extension and remixing",
    "Mobile app",
  ],
  pros: [
    "Strikingly musical, cohesive output",
    "Vocals sound natural",
    "Easy enough for anyone to use",
    "Fun, capable free tier",
  ],
  cons: [
    "Lyrics and copyright concerns to manage",
    "Limited edits per generation",
    "Commercial rights need a paid plan",
  ],
  screenshots: [
    "/screenshots/suno-1.svg",
    "/screenshots/suno-2.svg",
    "/screenshots/suno-3.svg",
  ],
  recommendedTools: ["elevenlabs"],
  recommendedServices: [],
  seoTitle: "Suno AI Music - Features, Pricing & Review | Myoboku AI",
  seoDescription:
    "A review of Suno: AI song generation, vocals, pricing tiers, pros and cons, and best use cases for creators.",
};

export default suno;
