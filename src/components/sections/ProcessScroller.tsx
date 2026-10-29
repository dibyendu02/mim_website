"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsapPlugins } from "@/lib/animation/gsapConfig";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useMediaQuery } from "@/components/motion/useMediaQuery";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";
import { cn } from "@/lib/cn";

interface ProcessStep {
  title: string;
  body: string;
}

interface ProcessScrollerProps {
  eyebrow: string;
  headline: string;
  body: string;
  steps: ProcessStep[];
}

// Pinning needs room for the header, one step and the timeline at once;
// anything smaller gets the stacked list instead.
const PIN_QUERY = "(min-width: 1024px) and (min-height: 640px)";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * "How we work" process. On large screens the section pins and vertical
 * scroll drives the steps sideways, one viewport of scroll per step, while a
 * dotted timeline fills in and lights up each step as it's reached. Small
 * screens and reduced-motion users get a vertical list on a dotted line.
 */
export function ProcessScroller(props: ProcessScrollerProps) {
  const canPin = useMediaQuery(PIN_QUERY);
  const reducedMotion = usePrefersReducedMotion();

  if (!canPin || reducedMotion || props.steps.length < 2) return <ProcessList {...props} />;
  return <PinnedProcess {...props} />;
}

function ProcessHeader({ eyebrow, headline, body }: Omit<ProcessScrollerProps, "steps">) {
  return (
    <ScrollReveal>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-display-md font-display font-semibold text-ink">{headline}</h2>
      <p className="mt-4 max-w-2xl text-lg text-text-muted">{body}</p>
    </ScrollReveal>
  );
}

function PinnedProcess({ steps, ...header }: ProcessScrollerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const lastIndex = steps.length - 1;
  // The line runs between the first and last node, which sit at the centers
  // of equal-width columns.
  const lineInset = `${50 / steps.length}%`;

  useGSAP(
    (_context, contextSafe) => {
      const viewport = viewportRef.current;
      if (!sectionRef.current || !viewport || !contextSafe) return;
      registerGsapPlugins();

      // Scroll position only *selects* the step; the move itself is a
      // fixed-duration tween that always completes, so the track can never
      // rest halfway between two steps.
      let current = 0;
      const place = (index: number, duration: number) => {
        gsap.to(trackRef.current, {
          x: -index * viewport.clientWidth,
          duration,
          ease: "power3.inOut",
          overwrite: true,
        });
        gsap.to(progressRef.current, {
          clipPath: `inset(0 ${100 - (index / lastIndex) * 100}% 0 0)`,
          duration,
          ease: "power3.inOut",
          overwrite: true,
        });
      };
      const show = contextSafe((index: number) => {
        if (index === current) return;
        current = index;
        setActive(index);
        place(index, 0.8);
      });

      triggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        // One viewport of scroll per step change.
        end: () => `+=${lastIndex * window.innerHeight}`,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / lastIndex,
          duration: { min: 0.2, max: 0.5 },
          delay: 0.05,
          ease: "power2.inOut",
        },
        onUpdate: (self) => show(Math.round(self.progress * lastIndex)),
        // Viewport width changes on resize; re-seat the track instantly.
        onRefresh: contextSafe(() => place(current, 0)),
      });
    },
    { scope: sectionRef, dependencies: [lastIndex] },
  );

  const goTo = (index: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * (index / lastIndex), behavior: "smooth" });
  };

  return (
    // Stable wrapper so GSAP's pin-spacer never becomes React's direct child.
    <div>
      <section ref={sectionRef} className="flex h-svh flex-col overflow-hidden bg-surface pb-12 pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10">
          <ProcessHeader {...header} />
        </div>

        <div className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 px-6 sm:px-10">
          <div ref={viewportRef} className="flex flex-1 items-center overflow-hidden">
            <div ref={trackRef} className="flex w-full">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className={cn(
                    "grid w-full shrink-0 grid-cols-12 items-end gap-16 transition-opacity duration-500",
                    index === active ? "opacity-100" : "opacity-20",
                  )}
                >
                  <div className="col-span-5">
                    <p className="font-display text-sm font-semibold text-text-muted">Step {pad(index + 1)}</p>
                    <h3 className="mt-3 font-display text-display-lg font-semibold text-ink">{step.title}</h3>
                  </div>
                  <p className="col-span-6 col-start-7 text-xl text-text-muted">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10">
          <div className="relative mx-auto max-w-4xl">
            <div
              aria-hidden
              className="absolute top-[7px] border-t-2 border-dotted border-ink/25"
              style={{ left: lineInset, right: lineInset }}
            />
            <div
              ref={progressRef}
              aria-hidden
              className="absolute top-[7px] border-t-2 border-dotted border-ink"
              style={{ left: lineInset, right: lineInset, clipPath: "inset(0 100% 0 0)" }}
            />
            <ol
              className="relative grid"
              style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
            >
              {steps.map((step, index) => (
                <li key={step.title} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-current={index === active ? "step" : undefined}
                    className="flex flex-col items-center gap-3"
                  >
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border-2 transition-all duration-300",
                        index <= active ? "border-ink bg-ink" : "border-ink/30 bg-surface",
                        index === active && "ring-4 ring-ink/10",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors duration-300",
                        index === active ? "text-ink" : index < active ? "text-ink/70" : "text-text-muted",
                      )}
                    >
                      {pad(index + 1)}. {step.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessList({ steps, ...header }: ProcessScrollerProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
      <ProcessHeader {...header} />

      <ol className="mt-12 max-w-3xl">
        {steps.map((step, index) => (
          <li key={step.title} className="relative pb-12 pl-10 last:pb-0">
            {index < steps.length - 1 && (
              <span aria-hidden className="absolute bottom-0 left-[7px] top-6 border-l-2 border-dotted border-ink/25" />
            )}
            <span aria-hidden className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-ink bg-ink" />
            <ScrollReveal>
              <p className="font-display text-sm font-semibold text-text-muted">{pad(index + 1)}.</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-lg text-text-muted">{step.body}</p>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
