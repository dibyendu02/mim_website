"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
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
 * The one GSAP ScrollTrigger pinned scrollytelling component on the site —
 * shared by the Home teaser and the About full narrative. Deliberately kept
 * to a single instance per page to avoid stacked-pin scroll jank.
 */
export function ScrollNarrative({ eyebrow, steps, className }: ScrollNarrativeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !wrapperRef.current) return;
      registerGsapPlugins();

      const validSteps = stepRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
      if (validSteps.length < 2) return;

      gsap.set(validSteps, { autoAlpha: 0, y: 24 });
      gsap.set(validSteps[0], { autoAlpha: 1, y: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${validSteps.length * 600}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      validSteps.forEach((step, index) => {
        if (index === 0) return;
        timeline
          .to(validSteps[index - 1], { autoAlpha: 0, y: -24, duration: 0.4 })
          .fromTo(step, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.4 }, "<");
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
