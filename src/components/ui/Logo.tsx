import Link from "next/link";
import { cn } from "@/lib/cn";

// TODO(launch): spec §4 — replace this typed wordmark with MiM's official
// logo asset (SVG, light variant for dark backgrounds) once supplied. No brand
// asset exists in the repo yet, so this is a stand-in, not a redraw.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-baseline gap-1.5 font-display text-xl font-semibold tracking-tight", className)}
    >
      MiM<span className="text-accent">Digital</span>
      <span className="sr-only"> — home</span>
    </Link>
  );
}
