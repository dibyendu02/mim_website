import { Camera, LayoutTemplate, Palette, Search, Share2, Target, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ServiceIconName } from "@/lib/types/content";

// One icon family (Lucide), one stroke weight — spec §5.4.
const icons: Record<ServiceIconName, LucideIcon> = {
  share: Share2,
  target: Target,
  camera: Camera,
  search: Search,
  palette: Palette,
  layout: LayoutTemplate,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden strokeWidth={1.5} className={cn("h-6 w-6 text-accent", className)} />;
}
