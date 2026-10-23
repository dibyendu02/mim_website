import { cn } from "@/lib/cn";

type Tone = "canvas" | "surface" | "ivory";

const tones: Record<Tone, string> = {
  canvas: "bg-canvas text-fg",
  surface: "bg-surface text-fg",
  ivory: "tone-ivory bg-ivory text-ink",
};

interface SectionProps {
  id?: string;
  /** id of the section's heading, for aria-labelledby. */
  labelledBy?: string;
  /** Plain-text accessible name, when the section has no visible heading. */
  label?: string;
  tone?: Tone;
  /** Override the default section vertical spacing. */
  spacing?: string;
  className?: string;
  /** Skip the inner container, for full-bleed content (children add their own). */
  bleed?: boolean;
  children: React.ReactNode;
}

/** Full-width section band with the shared container and vertical rhythm. */
export function Section({
  id,
  labelledBy,
  label,
  tone = "canvas",
  spacing = "py-section",
  className,
  bleed,
  children,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={label} className={cn(tones[tone], spacing)}>
      {bleed ? children : <div className={cn("container-site", className)}>{children}</div>}
    </section>
  );
}
