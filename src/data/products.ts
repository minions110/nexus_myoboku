/**
 * Product domain types and data.
 *
 * Products are Myoboku AI's own offerings — distinct from third-party tools
 * or services. Data lives here (not hard-coded in components) so pages stay
 * purely presentational and future API/knowledge-base integration is easy.
 */

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface Product {
  /** Stable unique identifier (kebab-case; matches slug by convention). */
  id: string;
  /** URL-safe slug, used for the product route, e.g. `/products/ai-custom-bracelet-design`. */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Path to a representative cover image. */
  coverImage: string;
  category: string;
  featured: boolean;
  status: "available" | "coming-soon";
  howItWorks: { step: string; title: string; description: string }[];
  customerJourney: { step: string; title: string; description: string }[];
  whatYouShare: string[];
  whatYouReceive: string[];
  requestPath: string;
  pricing: PricingTier[];
  faqs: ProductFaq[];
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    id: "ai-custom-bracelet-design",
    slug: "ai-custom-bracelet-design",
    name: "AI Custom Bracelet Design",
    tagline: "Turn your story into a meaningful, makeable bracelet design.",
    description:
      "Share your story and preferences. Our AI-assisted design process creates a personalized bracelet design proposal — including materials, bead layout, craft method and design meaning. You review, revise and confirm before final production.",
    coverImage: "/images/logo/nexus1.png",
    category: "Custom AI Design",
    featured: true,
    status: "available",
    requestPath: "/products/ai-custom-bracelet-design/request/",
    howItWorks: [
      {
        step: "1",
        title: "Stage 1 — Design Proposal",
        description: "You share your story, style, colors, wrist size and budget. We prepare a personalized design proposal including concept, materials, bead layout and design meaning for your review.",
      },
      {
        step: "2",
        title: "Your Review",
        description: "Review the proposal. Request adjustments (according to your plan's revision policy) or confirm to proceed.",
      },
      {
        step: "3",
        title: "Stage 2 — Final Production",
        description: "After your confirmation, we prepare the final design files: detailed bead arrangement, material list, making instructions, story and deliverables according to your plan.",
      },
      {
        step: "4",
        title: "Digital Delivery",
        description: "You receive the complete design package by email within 3–5 business days of confirmation.",
      },
    ],
    customerJourney: [
      {
        step: "1",
        title: "Share Your Story",
        description: "Tell us what your bracelet should express — emotion, memory, occasion or meaning.",
      },
      {
        step: "2",
        title: "Receive Your Design Proposal",
        description: "We prepare a personalized design proposal with concept, materials and bead layout for your review.",
      },
      {
        step: "3",
        title: "Review & Confirm",
        description: "Request adjustments or confirm the design. Production begins only after your approval.",
      },
      {
        step: "4",
        title: "Receive Your Final Design",
        description: "Get the complete digital design package — ready for DIY crafting or working with a maker.",
      },
    ],
    whatYouShare: [
      "Your story — what the bracelet expresses",
      "Emotion, occasion or memory",
      "Wrist size",
      "Budget range",
      "Preferred style",
      "Preferred colors",
      "Material preferences",
      "Reference images (optional)",
    ],
    whatYouReceive: [
      "Design proposal",
      "Design story & meaning",
      "Material selection",
      "Bead layout",
      "Craft method",
      "Product visual concept",
      "Product description",
    ],
    pricing: [
      {
        name: "Starter",
        price: 19,
        currency: "USD",
        description: "One personalized design direction.",
        features: [
          "1 design proposal",
          "Design story & meaning",
          "Material selection",
          "Bead layout",
          "Craft method",
        ],
        cta: "Start Your Design",
        href: "/products/ai-custom-bracelet-design/request/?tier=starter",
      },
      {
        name: "Premium",
        price: 39,
        currency: "USD",
        description: "Three design directions with revision.",
        features: [
          "3 design proposals",
          "Design revision round",
          "Product visual concept",
          "Material list",
          "Craft instructions",
          "Product description",
        ],
        cta: "Start Your Design",
        href: "/products/ai-custom-bracelet-design/request/?tier=premium",
        highlighted: true,
      },
      {
        name: "Full",
        price: 69,
        currency: "USD",
        description: "Complete product package for selling or gifting.",
        features: [
          "Everything in Premium",
          "Final product visuals",
          "Lifestyle & scene images",
          "Product listing copy",
          "Pinterest content",
          "PDF product package",
        ],
        cta: "Start Your Design",
        href: "/products/ai-custom-bracelet-design/request/?tier=full",
      },
    ],
    faqs: [
      {
        q: "How does the custom bracelet design process work?",
        a: "The process has two stages. Stage 1: You share your story and preferences, and we prepare a design proposal for your review. Stage 2: After you confirm the proposal, we produce the final design files and deliver them by email.",
      },
      {
        q: "What information do I need to provide?",
        a: "Your story (what the bracelet should express), occasion, wrist size, budget, preferred style, colors and material preferences. Reference images are optional but helpful.",
      },
      {
        q: "Can I request changes to the design?",
        a: "Starter includes no revision round. Premium and Full each include 1 revision round. You can request adjustments to colors, materials or layout within the same design direction. See our Revision Policy for details.",
      },
      {
        q: "How long does it take?",
        a: "Final digital delivery takes 3–5 business days after you confirm the design proposal. See our Delivery Policy for the full timeline.",
      },
      {
        q: "Do you ship a physical bracelet?",
        a: "No. This is a digital design service. You receive design documents, instructions and images — not a physical bracelet. You can use the design to craft the bracelet yourself or work with a maker.",
      },
      {
        q: "Can I use the design commercially?",
        a: "Personal use is included by default. Commercial use requires a separate agreement. See our Digital Product Terms for details.",
      },
      {
        q: "Is the design fully AI-generated?",
        a: "No. We use AI tools to assist in generating design concepts and suggestions, but every deliverable is reviewed, curated and organized by our team before being sent to you.",
      },
    ],
    seoTitle: "AI Custom Bracelet Design - Personalized Crystal & Bead Bracelet Proposals | Myoboku AI",
    seoDescription:
      "Turn your story into a personalized bracelet design proposal. AI-assisted design with materials, bead layout and craft instructions. Review and confirm before final delivery.",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
