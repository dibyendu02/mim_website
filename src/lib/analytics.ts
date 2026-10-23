// Spec §9 analytics events. Events are pushed to window.dataLayer, which only
// exists once a tag manager has been installed — and that install is where
// the site's consent/privacy requirements are enforced. With no tag manager
// present this is a no-op, so nothing is tracked without one.

export type AnalyticsEvent =
  | "cta_primary_click"
  | "cta_secondary_click"
  | "case_study_open"
  | "case_study_navigate"
  | "enquiry_submit_success";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function track(event: AnalyticsEvent, properties: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  (window as DataLayerWindow).dataLayer?.push({ event, ...properties });
}
