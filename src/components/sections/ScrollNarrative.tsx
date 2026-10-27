"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsapPlugins } from "@/lib/animation/gsapConfig";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";
import { cn } from "@/lib/cn";

interface NarrativeStep {
  title: string;
  body: string;
}

interface ScrollNarrativeProps {
  eyebrow?: string;
  steps: NarrativeStep[];
  className?: string;
}

/**
 * The one GSAP ScrollTrigger pinned scrollytelling component on the site.
 * Deliberately kept to a single instance per page to avoid stacked-pin
 * scroll jank.
 *
 * Scroll position only *selects* the active step; the crossfade itself is a
 * fixed-duration tween, so steps never freeze half-faded on top of each
 * other. Snap settles the scroll on the nearest step when the user stops
 * between two.
 */
export function ScrollNarrative({ eyebrow, steps, className }: ScrollNarrativeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    (_context, contextSafe) => {
      if (reducedMotion || !wrapperRef.current || !contextSafe) return;
      registerGsapPlugins();

      const validSteps = stepRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
      const lastIndex = validSteps.length - 1;
      if (lastIndex < 1) return;

      gsap.set(validSteps, { autoAlpha: 0, y: 24 });
      gsap.set(validSteps[0], { autoAlpha: 1, y: 0 });

      let active = 0;
      const show = contextSafe((next: number) => {
        if (next === active) return;
        const direction = next > active ? 1 : -1;
        gsap.to(validSteps[active], {
          autoAlpha: 0,
          y: -24 * direction,
          duration: 0.4,
          ease: "power2.in",
          overwrite: true,
        });
        gsap.fromTo(
          validSteps[next],
          { autoAlpha: 0, y: 24 * direction },
          { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.25, ease: "power3.out", overwrite: true },
        );
        active = next;
      });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        // One viewport of scroll per step change.
        end: () => `+=${lastIndex * window.innerHeight}`,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / lastIndex,
          duration: { min: 0.2, max: 0.6 },
          delay: 0.05,
          ease: "power2.inOut",
        },
        onUpdate: (self) => show(Math.round(self.progress * lastIndex)),
      });
    },
    { scope: wrapperRef, dependencies: [reducedMotion, steps.length] },
  );

  if (reducedMotion) {
    return (
      <section data-nav-theme="dark" className={cn("bg-ink py-24 text-text-inverse", className)}>
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">{eyebrow}</p>}
          <div className="mt-10 space-y-16">
            {steps.map((step) => (
              <div key={step.title}>
                <h3 className="text-display-md font-display font-semibold">{step.title}</h3>
                <p className="mt-4 text-lg text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={wrapperRef}
      data-nav-theme="dark"
      className={cn("relative h-screen overflow-hidden bg-ink text-text-inverse", className)}
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 sm:px-10">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">{eyebrow}</p>}
        <div className="relative mt-6 h-[18rem] sm:h-[14rem]">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="absolute inset-0"
            >
              <h3 className="text-display-md font-display font-semibold">{step.title}</h3>
              <p className="mt-4 max-w-xl text-lg text-white/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
