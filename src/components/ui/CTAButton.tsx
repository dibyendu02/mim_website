"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import type { Cta } from "@/lib/types/content";

type Variant = "primary" | "secondary" | "text";

interface CTAButtonProps {
  cta: Cta;
  variant?: Variant;
  /** ↗ for destination CTAs, → for in-flow ones (matches the approved copy). */
  arrow?: "up-right" | "right";
  /** Where on the page this CTA sits — sent with the click event. */
  location: string;
  /** Use on the ivory surface. */
  onLight?: boolean;
  className?: string;
}

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-button font-body text-[0.9375rem] font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent px-5 py-3 text-canvas hover:bg-accent-hover active:bg-accent-hover",
  secondary: "border border-line px-5 py-3 text-fg hover:border-fg/60 hover:bg-fg/5",
  text: "px-1 py-3 text-fg underline-offset-4 hover:underline",
};

const onLightVariants: Record<Variant, string> = {
  primary: variants.primary,
  secondary: "border border-ink/25 px-5 py-3 text-ink hover:border-ink/60 hover:bg-ink/5",
  text: "px-1 py-3 text-ink underline-offset-4 hover:underline",
};

export function CTAButton({ cta, variant = "primary", arrow = "up-right", location, onLight, className }: CTAButtonProps) {
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  const isExternal = /^https?:\/\//.test(cta.href);
  const classes = cn(base, (onLight ? onLightVariants : variants)[variant], className);

  const onClick = () =>
    track(variant === "primary" ? "cta_primary_click" : "cta_secondary_click", {
      label: cta.label,
      href: cta.href,
      location,
    });

  const content = (
    <>
      {cta.label}
      <Icon
        aria-hidden
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          arrow === "up-right" ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : "group-hover:translate-x-0.5",
        )}
        strokeWidth={2}
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={cta.href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={cta.href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
