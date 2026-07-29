/**
 * AI service landing pages.
 *
 * Each entry maps to a real, hand-built service page under `src/pages/`.
 * The homepage "Featured AI Services" section renders these so the cards always
 * link to live, reviewed routes rather than placeholder destinations.
 */

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Icon name resolved by the `Icon.astro` component. */
  icon: string;
  href: string;
  highlights: string[];
  /** Accent colour used for the icon tile. */
  accent: string;
}

export const services: Service[] = [
  {
    slug: "ai-coding",
    name: "AI Coding",
    tagline: "Ship code faster",
    description:
      "Vetted AI coding experts and copilots to build features, review pull requests and fix bugs at startup speed.",
    icon: "code",
    href: "/ai-coding",
    highlights: ["Pair programming", "Code review", "Bug fixing"],
    accent: "#4f46e5",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "Autonomous agents",
    description:
      "Design, build and deploy autonomous agents with memory, tools and guardrails for real production work.",
    icon: "bot",
    href: "/ai-agents",
    highlights: ["Agent design", "Tool integration", "Deployment"],
    accent: "#8b5cf6",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Workflows & pipelines",
    description:
      "Automate repetitive work with AI-powered workflows that connect your stack end to end, no code required.",
    icon: "workflow",
    href: "/ai-automation",
    highlights: ["Workflow design", "Integrations", "Pipelines"],
    accent: "#06b6d4",
  },
  {
    slug: "ai-design",
    name: "AI Design",
    tagline: "Graphics, UI & 3D",
    description:
      "Generate on-brand visuals, UI and creative assets with AI design specialists and tooling.",
    icon: "palette",
    href: "/ai-design",
    highlights: ["Visual generation", "UI design", "Branding"],
    accent: "#ec4899",
  },
];

/** Every service, in display order. */
export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
