import { Inter, Space_Grotesk } from "next/font/google";

// Spec §3.2: Space Grotesk for display/headings, Inter for body and UI.
// next/font self-hosts both at build time, so there is no runtime request to
// Google. Only the weights actually used are loaded. Everything else
// references the --font-display / --font-body theme tokens in globals.css.

export const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
