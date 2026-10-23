import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional CTA, placed beside the heading on wide screens. */
  action?: React.ReactNode;
  /** Use on the ivory surface. */
  onLight?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  onLight,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16", className)}>
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow onLight={onLight}>{eyebrow}</Eyebrow>}
        <Heading id={id} className={cn("text-section", eyebrow && "mt-4")}>
          {title}
        </Heading>
        {description && (
          <p className={cn("mt-5 max-w-[65ch] text-base sm:text-lg", onLight ? "text-ink/75" : "text-muted")}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Eyebrow({ children, onLight, className }: { children: React.ReactNode; onLight?: boolean; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-2.5", onLight ? "text-ink" : "text-accent", className)}>
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}
