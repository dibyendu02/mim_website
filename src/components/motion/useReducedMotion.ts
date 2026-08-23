"use client";

import { useEffect, useState } from "react";

function getInitialReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Single source of truth for prefers-reduced-motion, consumed by every
 * animated component (marquee, kinetic headline, scroll narrative, counters)
 * so reduced-motion users get instant final-state content instead of a
 * half-animated, broken layout.
 *
 * Initial value is read in useState's lazy initializer (runs once, safely
 * guarded for SSR) so the effect only ever calls setState from the media
 * query's own change callback — a straightforward subscription, not a
 * synchronous set on every mount.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(getInitialReducedMotion);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
