import { Bricolage_Grotesque, Inter } from "next/font/google";

// Single swap point: replace these two font declarations with MiM's
// licensed brand fonts once supplied. Everything else references the
// --font-display / --font-body CSS variables, not these imports directly.

export const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
