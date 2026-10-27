"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

/**
 * Single source of truth for prefers-reduced-motion, consumed by every
 * animated component (marquee, kinetic headline, scroll narrative, counters)
 * so reduced-motion users get instant final-state content instead of a
 * half-animated, broken layout.
 *
 * useSyncExternalStore hydrates with the server snapshot (false) and then
 * re-renders with the real media-query value, so the first client render
 * always matches the server HTML — reading matchMedia during the initial
 * render would cause a hydration mismatch for reduced-motion users.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
