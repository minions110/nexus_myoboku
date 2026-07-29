/**
 * Core domain types for the AI Tool database.
 *
 * Centralised here so tool entries, categories, tags and the query helpers
 * share a single source of truth. Keep this file dependency-free.
 */

/** High-level pricing classification used for badges, filtering and sorting. */
export type PricingModel = "free" | "freemium" | "paid" | "contact";

/** Billing cadence for an individual pricing plan. */
export type BillingPeriod = "month" | "year" | "one-time" | "custom";

export interface PricingPlan {
  name: string;
  /** Numeric price in the plan's currency. Use `0` for free plans. */
  price: number;
  currency: string;
  period: BillingPeriod;
  description?: string;
  features?: string[];
}

export interface Pricing {
  model: PricingModel;
  /**
   * Lowest available price in USD, handy for quick display and sorting.
   * Omit when there is no public price (e.g. "contact" model).
   */
  startingPrice?: number;
  currency?: string;
  /** Whether a free trial is available. */
  freeTrial?: boolean;
  plans?: PricingPlan[];
}

/**
 * A single AI tool entry.
 *
 * `category` and `tags` store slugs (see `categories.ts` / `tags.ts`) so the
 * data stays normalised: reorganising taxonomy never requires touching every
 * tool file.
 */
export interface Tool {
  /** Stable unique identifier (kebab-case; matches `slug` by convention). */
  id: string;
  /** URL-safe slug, used for the tool's route, e.g. `/tools/chatgpt`. */
  slug: string;
  name: string;
  /** Square brand mark, e.g. "/logos/chatgpt.svg". */
  logo: string;
  /** Wide cover image, e.g. "/covers/chatgpt.svg". */
  coverImage: string;
  developer: string;
  officialWebsite: string;
  /** Optional affiliate/referral link. Omit when a tool has no program. */
  affiliateLink?: string;
  /** Slug of the primary category (see `categories.ts`). */
  category: string;
  /** Slugs of applicable tags (see `tags.ts`). */
  tags: string[];
  pricing: Pricing;
  /** Average rating, 0–5 (one decimal). */
  rating: number;
  /** Surfaced in featured/hero placements. */
  featured: boolean;
  /** ISO 8601 date the tool was first published/listed. */
  publishDate: string;
  /** One-line summary for cards and search results. */
  shortDescription: string;
  /** Full multi-paragraph description (plain text). */
  description: string;
  /** Key capabilities/highlights shown on the detail page. */
  features?: string[];
  pros: string[];
  cons: string[];
  /** Gallery image paths/URLs. */
  screenshots: string[];
  /** Slugs of other tools to recommend alongside this one. */
  recommendedTools: string[];
  /** Identifiers (slugs/paths) of related service pages to upsell. */
  recommendedServices: string[];
  seoTitle: string;
  seoDescription: string;
  /** ISO 8601 date of the last editorial review. Powers `Article:modifiedTime`. */
  lastUpdated?: string;
}
