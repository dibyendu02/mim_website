import { cn } from "@/lib/cn";

interface MarqueeProps {
  /** List items (<li>) — rendered twice so the loop is seamless. */
  children: React.ReactNode;
  /** Seconds for one full loop of the original set. */
  duration?: number;
  /** Explicit pause, e.g. from a pause/play control. */
  paused?: boolean;
  /** Tailwind gap class; also applied as trailing padding so the seam is even. */
  gapClass?: string;
  gapPadClass?: string;
  label?: string;
  className?: string;
}

/**
 * Continuous horizontal loop, CSS-only. Pauses on hover, on keyboard focus
 * inside it, and while any toggle inside is pressed (e.g. a revealed team
 * card). The duplicate set is aria-hidden and inert, so screen readers and
 * keyboard users meet each item once. With prefers-reduced-motion the
 * animation stops and the original set becomes a normal scrollable row.
 */
export function Marquee({
  children,
  duration = 40,
  paused,
  gapClass = "gap-6",
  gapPadClass = "pr-6",
  label,
  className,
}: MarqueeProps) {
  const listClass = cn("flex shrink-0 items-center", gapClass, gapPadClass);

  return (
    <div
      aria-label={label}
      role={label ? "region" : undefined}
      className={cn("overflow-hidden motion-reduce:overflow-x-auto", className)}
    >
      <div
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        className={cn(
          "flex w-max animate-marquee motion-reduce:animate-none",
          "hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] has-[[aria-pressed=true]]:[animation-play-state:paused]",
          paused && "[animation-play-state:paused]",
        )}
      >
        <ul className={listClass}>{children}</ul>
        <ul aria-hidden inert className={cn(listClass, "motion-reduce:hidden")}>
          {children}
        </ul>
      </div>
    </div>
  );
}
