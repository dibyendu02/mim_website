"use client";

import { useEffect, useState } from "react";

/**
 * Watches every element tagged data-nav-theme="dark" and reports whether one
 * currently sits at the vertical center of the viewport. The navbar uses
 * this to flip to a dark (black bg, white text) treatment while a full-bleed
 * dark section — e.g. the pinned ScrollNarrative — is behind it, instead of
 * staying in its light "scrolled" state and clashing with it.
 *
 * A MutationObserver re-scans for new [data-nav-theme] nodes so this keeps
 * working across client-side route changes without depending on pathname
 * timing (the navbar persists across navigations, page content doesn't).
 */
export function useSectionTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const active = new Set<Element>();

    const recompute = () => {
      for (const el of Array.from(active)) {
        if (!document.contains(el)) active.delete(el);
      }
      setIsDark(active.size > 0);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.add(entry.target);
          else active.delete(entry.target);
        });
        recompute();
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    const observed = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll("[data-nav-theme='dark']").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          intersectionObserver.observe(el);
        }
      });
    };
    scan();

    const mutationObserver = new MutationObserver(() => {
      scan();
      recompute();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return isDark;
}
