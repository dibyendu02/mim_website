"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { BentoSize } from "@/lib/types/content";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Grid is 1 col → 2 cols (sm) → 4 cols (lg). Rows are filled exactly by
// the content order: two "lg" tiles side by side, then four "sm" tiles.
const sizeClasses: Record<BentoSize, string> = {
  sm: "min-h-[220px]",
  md: "sm:col-span-2 min-h-[220px]",
  lg: "sm:col-span-2 min-h-[340px] lg:min-h-[400px]",
  wide: "sm:col-span-2 lg:col-span-4 min-h-[220px]",
};

interface BentoTileProps {
  size: BentoSize;
  title: string;
  description: string;
  icon: string;
  href?: string;
  /** Shown on highlighted ("lg") tiles only. */
  points?: string[];
  className?: string;
}

export function BentoTile({ size, title, description, icon, href, points, className }: BentoTileProps) {
  // "lg" tiles are the core services — rendered dark so they read first.
  const highlighted = size === "lg";

  const content = (
    <motion.div
      variants={item}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-bento border p-6 transition-[border-color,box-shadow] duration-300 sm:p-8",
        highlighted
          ? "border-ink bg-ink text-text-inverse hover:shadow-[0_24px_60px_-24px_rgba(17,17,17,0.6)]"
          : "border-ink/10 bg-surface hover:border-ink/30 hover:shadow-[0_16px_40px_-24px_rgba(17,17,17,0.35)]",
        sizeClasses[size],
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <ServiceIcon
          name={icon}
          className={cn(
            "transition-colors duration-300",
            highlighted
              ? "bg-white/10 text-text-inverse group-hover:bg-text-inverse group-hover:text-ink"
              : "group-hover:bg-ink group-hover:text-text-inverse",
          )}
        />
        {highlighted && (
          <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/60">
            Core service
          </span>
        )}
      </div>

      <div className="mt-8">
        <h3
          className={cn(
            "font-display font-semibold",
            highlighted ? "text-display-md text-text-inverse" : "text-xl text-ink",
          )}
        >
          {title}
        </h3>
        <p className={cn("mt-2", highlighted ? "max-w-md text-base text-white/60" : "text-sm text-text-muted")}>
          {description}
        </p>

        {highlighted && points && points.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {points.map((point) => (
              <li key={point} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                {point}
              </li>
            ))}
          </ul>
        )}

        {href && (
          <span
            className={cn(
              "mt-6 inline-flex items-center gap-2 text-sm font-medium",
              highlighted ? "text-text-inverse" : "text-ink",
            )}
          >
            Learn more
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="contents">
        {content}
      </Link>
    );
  }

  return content;
}
