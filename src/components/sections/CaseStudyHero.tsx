"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";
import type { CaseStudy } from "@/lib/types/content";

const AUTOPLAY_INTERVAL = 6000;

/**
 * Full-bleed, auto-advancing image carousel with the case study's title,
 * tags and hero metric overlaid at the bottom. Slides come from the study's
 * image gallery; the timer restarts on manual navigation so a click never
 * gets immediately overridden, and autoplay is off for reduced-motion users.
 */
export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const slides = study.gallery.filter((item) => item.type === "image");
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (total <= 1 || reducedMotion) return;
    const id = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => clearTimeout(id);
  }, [index, total, reducedMotion, next]);

  return (
    <section
      data-nav-theme="overlay"
      aria-roledescription="carousel"
      // -mt-18 matches the navbar's h-18 so the image runs up behind it.
      className="relative -mt-18 h-svh min-h-[560px] w-full overflow-hidden bg-ink"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 via-45% to-transparent to-80%" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent sm:h-48" />

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/30 text-text-inverse transition-colors hover:bg-ink/55 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/30 text-text-inverse transition-colors hover:bg-ink/55 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </>
      )}

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 sm:px-10 sm:pb-16">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-text-inverse/80">
          <span className="font-display text-base font-semibold text-text-inverse">{study.clientName}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-text-inverse/30 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-text-inverse" aria-hidden />
            {study.industry}
          </span>
          {study.servicesUsed.map((service) => (
            <span key={service} className="text-sm">
              {service}
            </span>
          ))}
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-text-inverse">{study.headline}</h1>

        <div className="mt-8 flex items-end justify-between gap-6">
          <p className="font-display text-display-md font-semibold text-text-inverse">
            <AnimatedCounter
              value={study.heroMetric.value}
              prefix={study.heroMetric.prefix}
              suffix={study.heroMetric.suffix}
            />
            <span className="ml-3 font-body text-lg font-normal text-text-inverse/70">{study.heroMetric.label}</span>
          </p>

          {total > 1 && (
            <div className="hidden items-center gap-3 pb-2 text-xs text-text-inverse/70 sm:flex" aria-live="polite">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="relative h-px w-16 overflow-hidden bg-text-inverse/30">
                <span
                  className="absolute inset-y-0 left-0 bg-text-inverse transition-all duration-700"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
