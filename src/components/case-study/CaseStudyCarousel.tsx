"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { getIndustry } from "@/content/industries";
import { slideLabels } from "@/content/case-studies";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import type { CaseStudy, CaseStudySlide, ImageAsset } from "@/lib/types/content";

interface CaseStudyCarouselProps {
  study: CaseStudy;
  next?: Pick<CaseStudy, "slug" | "client">;
}

const SWIPE_THRESHOLD_PX = 50;
const WHEEL_THRESHOLD = 40;

/**
 * Full-page case-study presentation. User-controlled only (never
 * auto-advances): prev/next buttons, numbered indicator, ← / → / Home / End
 * keys, horizontal swipe on touch, wheel/trackpad scrolling, Escape or the
 * close button to leave.
 * Focus is never trapped — it's a page, not a modal.
 *
 * Every slide is server-rendered (inactive ones are `hidden`), so the whole
 * story stays in the HTML; only the visible slide changes.
 */
export function CaseStudyCarousel({ study, next }: CaseStudyCarouselProps) {
  const router = useRouter();
  const backHref = useBackHref();
  const [current, setCurrent] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const total = study.slides.length;
  const industry = getIndustry(study.industry);

  const goTo = useCallback(
    (index: number) => {
      const target = Math.min(Math.max(index, 0), total - 1);
      if (target === current) return;
      setCurrent(target);
      // Long slides on small screens: start each new slide from its top.
      if (window.scrollY > 0) window.scrollTo({ top: 0 });
      track("case_study_navigate", { slug: study.slug, slide: target + 1, kind: study.slides[target].kind });
    },
    [current, total, study],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable]")) return;

      const actions: Record<string, () => void> = {
        ArrowRight: () => goTo(current + 1),
        ArrowLeft: () => goTo(current - 1),
        Home: () => goTo(0),
        End: () => goTo(total - 1),
        Escape: () => router.push(backHref),
      };
      const action = actions[event.key];
      if (action) {
        event.preventDefault();
        action();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [current, total, goTo, router, backHref]);

  // Wheel / trackpad navigation. Horizontal scrolling always changes slide.
  // Vertical scrolling first scrolls the page as normal, and only changes
  // slide once the page is already at its end in that direction — so tall
  // slides stay readable. A gesture (including trackpad inertia) moves at
  // most one slide: the lock releases only after the wheel goes quiet.
  const goToRef = useRef(goTo);
  const currentRef = useRef(current);
  useEffect(() => {
    goToRef.current = goTo;
    currentRef.current = current;
  });

  useEffect(() => {
    let accumulated = 0;
    let locked = false;
    let quietTimer: number | undefined;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return; // pinch-zoom
      const target = event.target as HTMLElement;
      if (target.closest("nav, header")) return;

      const releaseWhenQuiet = () => {
        window.clearTimeout(quietTimer);
        quietTimer = window.setTimeout(() => {
          locked = false;
          accumulated = 0;
        }, 220);
      };

      // Swallow the rest of a gesture that already changed slide, so its
      // inertia doesn't scroll the new slide or skip another one.
      if (locked) {
        event.preventDefault();
        releaseWhenQuiet();
        return;
      }

      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const delta = horizontal ? event.deltaX : event.deltaY;

      if (!horizontal) {
        const page = document.scrollingElement ?? document.documentElement;
        const atTop = page.scrollTop <= 0;
        const atBottom = page.scrollTop + window.innerHeight >= page.scrollHeight - 2;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
          accumulated = 0;
          return; // let the page scroll normally
        }
      }

      event.preventDefault();
      releaseWhenQuiet();
      accumulated += delta;
      if (Math.abs(accumulated) < WHEEL_THRESHOLD) return;
      locked = true;
      goToRef.current(currentRef.current + Math.sign(accumulated));
      accumulated = 0;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(quietTimer);
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > SWIPE_THRESHOLD_PX && Math.abs(dx) > Math.abs(dy)) goTo(current + (dx < 0 ? 1 : -1));
  };

  const position = (index: number) => `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <div className="flex min-h-svh flex-col bg-canvas">
      <header className="border-b border-line">
        <div className="container-site flex h-16 items-center justify-between gap-6">
          <div className="min-w-0">
            <h1 id="case-study-title" className="truncate font-display text-base font-semibold sm:text-lg">
              {study.client}
            </h1>
            <p className="truncate text-xs text-muted">
              {industry?.title} · {study.category}
            </p>
          </div>
          <Link
            href={backHref}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-button border border-line px-4 text-sm font-semibold transition-colors duration-200 hover:border-fg/60 hover:bg-fg/5"
          >
            <X aria-hidden className="h-4 w-4" />
            Close
            <span className="sr-only"> case study</span>
          </Link>
        </div>
      </header>

      <main
        id="main"
        aria-roledescription="carousel"
        aria-labelledby="case-study-title"
        className="flex flex-1 flex-col"
      >
        <div
          aria-live="polite"
          className="container-site flex flex-1 touch-pan-y flex-col py-10 sm:py-16"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (pointerStart.current = null)}
        >
          {study.slides.map((slide, index) => (
            <section
              key={`${slide.kind}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${slideLabels[slide.kind]}`}
              hidden={index !== current}
              className="animate-slide-in"
            >
              <Slide
                slide={slide}
                position={position(index)}
                fallbackImage={index === 0 ? study.cover : undefined}
                isLast={index === total - 1}
                next={next}
              />
            </section>
          ))}
        </div>

        <nav
          aria-label="Case study slides"
          className="sticky bottom-0 border-t border-line bg-canvas/95 backdrop-blur"
        >
          <div className="container-site flex items-center justify-between gap-4 py-3">
            <SlideButton label="Previous slide" disabled={current === 0} onClick={() => goTo(current - 1)}>
              <ArrowLeft aria-hidden className="h-5 w-5" />
            </SlideButton>

            <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <p className="text-xs font-semibold tabular-nums text-muted">
                <span className="sr-only">Slide </span>
                {position(current)}
                <span className="text-fg"> — {slideLabels[study.slides[current].kind]}</span>
              </p>
              <ol className="flex w-full max-w-md gap-1.5">
                {study.slides.map((slide, index) => (
                  <li key={`${slide.kind}-${index}`} className="flex-1">
                    <button
                      type="button"
                      aria-label={`Go to slide ${index + 1}: ${slideLabels[slide.kind]}`}
                      aria-current={index === current ? "step" : undefined}
                      onClick={() => goTo(index)}
                      className="group flex h-6 w-full items-center"
                    >
                      <span
                        className={cn(
                          "h-0.5 w-full rounded-full transition-colors duration-200",
                          index === current ? "bg-accent" : index < current ? "bg-fg/50" : "bg-line group-hover:bg-fg/40",
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            <SlideButton label="Next slide" disabled={current === total - 1} onClick={() => goTo(current + 1)}>
              <ArrowRight aria-hidden className="h-5 w-5" />
            </SlideButton>
          </div>
        </nav>
      </main>
    </div>
  );
}

function Slide({
  slide,
  position,
  fallbackImage,
  isLast,
  next,
}: {
  slide: CaseStudySlide;
  position: string;
  fallbackImage?: ImageAsset;
  isLast: boolean;
  next?: Pick<CaseStudy, "slug" | "client">;
}) {
  const images = slide.images?.length ? slide.images : fallbackImage ? [fallbackImage] : [];
  const imageOnly = images.length > 0 && !slide.body && !slide.points;

  return (
    <div className={cn("grid gap-10 lg:gap-16", !imageOnly && images.length > 0 && "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]")}>
      <div className="max-w-2xl">
        <p className="eyebrow text-accent">
          <span className="tabular-nums">{position}</span>
          <span aria-hidden className="mx-2 text-line">
            /
          </span>
          {slideLabels[slide.kind]}
        </p>
        <h2 className="mt-5 text-section">{slide.heading}</h2>
        {slide.body && <p className="mt-6 max-w-[60ch] text-base text-muted sm:text-lg">{slide.body}</p>}
        {slide.points && (
          <ul className="mt-6 space-y-3 border-t border-line pt-6">
            {slide.points.map((point) => (
              <li key={point} className="flex gap-3 text-[0.9375rem] sm:text-base">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}
        {isLast && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            {next && (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group inline-flex min-h-11 items-center gap-2 rounded-button bg-accent px-5 py-3 text-[0.9375rem] font-semibold text-canvas transition-colors duration-200 hover:bg-accent-hover"
              >
                Next case study: {next.client}
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            )}
            <Link href="/case-studies" className="inline-flex min-h-11 items-center py-3 text-[0.9375rem] font-semibold underline-offset-4 hover:underline">
              View all case studies
            </Link>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className={cn("grid gap-4 sm:gap-6", images.length > 1 && "sm:grid-cols-2")}>
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-surface"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={fallbackImage !== undefined && index === 0}
                sizes={imageOnly && images.length > 1 ? "(min-width: 1280px) 620px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SlideButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-colors duration-200 hover:border-fg/60 hover:bg-fg/5 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:bg-transparent"
    >
      {children}
    </button>
  );
}

// Where "Close" returns to: the homepage work section when opened from the
// homepage (?from=home), otherwise the case-study index. Read from the URL on
// the client so the page itself stays statically rendered.
const noopSubscribe = () => () => {};

function useBackHref() {
  return useSyncExternalStore(
    noopSubscribe,
    () => (new URLSearchParams(window.location.search).get("from") === "home" ? "/#work" : "/case-studies"),
    () => "/case-studies",
  );
}
