import type { ClientLogo } from "@/lib/types/content";

// PLACEHOLDER wordmarks — spec §5.2 / §10: replace with original logos of
// brands that have worked with MiM and approved public display. If the
// approved list is short, show fewer logos; an empty array hides the strip.
// Width/height are the asset's intrinsic size (used for aspect ratio only;
// the strip balances logos by height).

export const clientLogos: ClientLogo[] = ["northline", "verve", "kaira", "solstice", "aero", "lume"].map((slug) => ({
  name: slug.charAt(0).toUpperCase() + slug.slice(1),
  src: `/placeholders/logos/${slug}.svg`,
  width: 160,
  height: 40,
}));
