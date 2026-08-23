import { Camera, LayoutGrid, Palette, Share2, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const icons: Record<string, LucideIcon> = {
  target: Target,
  camera: Camera,
  share: Share2,
  palette: Palette,
  "trending-up": TrendingUp,
  "layout-grid": LayoutGrid,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = icons[name] ?? LayoutGrid;
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-brand",
        className,
      )}
    >
      <IconComponent className="h-5 w-5" strokeWidth={1.75} aria-hidden />
    </span>
  );
}
