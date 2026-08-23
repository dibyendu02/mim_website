import type { Logo } from "@/lib/types/content";

export const clientLogos: Logo[] = [
  "northline",
  "verve",
  "kaira",
  "solstice",
  "aero",
  "lume",
  "pivot",
  "orbit",
  "nova",
  "atlas",
  "fenwick",
  "harbor",
].map((slug) => ({
  name: slug.charAt(0).toUpperCase() + slug.slice(1),
  src: `/placeholders/logos/${slug}.svg`,
}));
