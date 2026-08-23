import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
}

/**
 * Minimal browser-chrome frame used to preview the site itself inside the
 * hero — a device-mockup treatment instead of leaning on oversized headline
 * type to carry the hero.
 */
export function BrowserFrame({ children, url = "mimdigital.in", className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-surface-dark shadow-2xl shadow-black/40", className)}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-center text-xs text-white/40">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
