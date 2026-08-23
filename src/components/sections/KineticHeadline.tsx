"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";

interface KineticHeadlineProps {
  text: string;
  as?: "h1" | "h2";
  className?: string;
}

/**
 * One-shot, mount-triggered kinetic reveal — splits the headline into
 * per-word spans (each masked by an overflow-hidden wrapper) and staggers
 * them in with GSAP. Scoped to GSAP per the animation-boundary convention:
 * hover/viewport reveals elsewhere use Framer Motion, this text-splitting
 * effect uses GSAP.
 */
export function KineticHeadline({ text, as = "h1", className }: KineticHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");
  const Tag = as;

  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current) return;

      const wordEls = containerRef.current.querySelectorAll("[data-kinetic-word]");
      gsap.set(wordEls, { yPercent: 110 });
      gsap.to(wordEls, {
        yPercent: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.06,
        delay: 0.1,
      });
    },
    { scope: containerRef, dependencies: [reducedMotion, text] },
  );

  return (
    <Tag ref={containerRef} className={cn("font-display font-semibold text-ink", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <span data-kinetic-word className="inline-block will-change-transform">
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
