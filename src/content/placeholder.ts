import type { ImageAsset } from "@/lib/types/content";

// PLACEHOLDER imagery. Seeded Picsum photos (stable URLs, no API key) stand in
// for MiM's original work until real assets are supplied. Spec §10: none of
// these may ship to production presented as client work — every call site is
// a launch blocker to replace.
export function placeholderPhoto(seed: string, alt: string, width = 1200, height = 900): ImageAsset {
  return { src: `https://picsum.photos/seed/mim-${seed}/${width}/${height}`, alt, width, height };
}
