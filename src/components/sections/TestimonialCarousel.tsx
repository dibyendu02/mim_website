"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/types/content";

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[index];

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  if (!current) return null;

  return (
    <div
      className="relative overflow-hidden rounded-bento bg-ink px-8 py-12 text-text-inverse sm:px-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.clientSlug}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_event, info) => {
            if (info.offset.x < -80) setIndex((i) => (i + 1) % testimonials.length);
            if (info.offset.x > 80) setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cursor-grab active:cursor-grabbing"
        >
          <p className="max-w-2xl text-xl font-medium sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-semibold">{current.authorName}</p>
              <p className="text-sm text-white/60">
                {current.authorRole}, {current.clientName}
              </p>
            </div>
            {current.metric && (
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-brand-accent">
                  <AnimatedCounter
                    value={current.metric.value}
                    prefix={current.metric.prefix}
                    suffix={current.metric.suffix}
                  />
                </p>
                <p className="text-xs uppercase tracking-wide text-white/50">{current.metric.label}</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {testimonials.length > 1 && (
        <div className="mt-10 flex gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.clientSlug}
              type="button"
              aria-label={`Show testimonial from ${testimonial.clientName}`}
              onClick={() => setIndex(i)}
              className={cn("h-1.5 rounded-full transition-all", i === index ? "w-8 bg-brand-accent" : "w-4 bg-white/20")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
