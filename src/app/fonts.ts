import localFont from "next/font/local";

// Brand typefaces: Clash Display (ITF, via Fontshare) for headings, Switzer
// (Fontshare) for body copy — self-hosted so there's no runtime dependency
// on Fontshare's CDN. Everything else references the --font-display /
// --font-body CSS variables, not these imports directly.

export const displayFont = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/files/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/files/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/files/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/files/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const bodyFont = localFont({
  variable: "--font-body",
  src: [
    { path: "./fonts/files/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/files/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/files/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/files/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
});
