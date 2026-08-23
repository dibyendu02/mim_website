import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-muted",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
      {children}
    </span>
  );
}
