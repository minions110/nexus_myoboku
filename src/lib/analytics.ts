/**
 * Lightweight, provider-agnostic analytics abstraction layer.
 *
 * Usage in Astro pages:
 *   1. Add `data-track="event_name"` to any clickable element.
 *   2. Add `data-track-props='{"key":"value"}'` for optional properties.
 *   3. Import and call `initAnalytics()` in a page-level `<script>`.
 *
 * To integrate a real provider (GA4, Plausible, PostHog), implement
 * `AnalyticsProvider` and assign it to `provider` below. When no provider
 * is set, `track()` is a no-op — the site works normally without analytics.
 */

export type AnalyticsEvent =
  | "product_view"
  | "product_cta_click"
  | "start_design"
  | "checkout_click"
  | "purchase"
  | "intake_submit"
  | "proposal_confirmed"
  | "project_completed";

export type AnalyticsProperties = Record<string, string>;

export interface AnalyticsProvider {
  track: (event: AnalyticsEvent, properties?: AnalyticsProperties) => void;
}

let provider: AnalyticsProvider | null = null;

export function setProvider(p: AnalyticsProvider | null): void {
  provider = p;
}

export function track(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  try {
    provider?.track(event, properties);
  } catch {
    // Analytics must never break the site.
  }
}

/**
 * Binds all elements with `[data-track]` to fire events on click.
 * Reads optional JSON properties from `[data-track-props]`.
 */
export function initAnalytics(): void {
  if (typeof document === "undefined") return;

  document.querySelectorAll<HTMLElement>("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      const eventName = el.dataset.track as AnalyticsEvent;
      if (!eventName) return;

      let props: AnalyticsProperties | undefined;
      if (el.dataset.trackProps) {
        try {
          props = JSON.parse(el.dataset.trackProps);
        } catch {
          // Invalid JSON — proceed without props.
        }
      }
      track(eventName, props);
    });
  });
}
