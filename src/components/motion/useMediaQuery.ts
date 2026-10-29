"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Live media-query match. Like usePrefersReducedMotion, it hydrates with
 * `false` and then re-renders with the real value, so the first client render
 * always matches the server HTML.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
