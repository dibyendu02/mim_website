import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/app/fonts";
import { site } from "@/content/site";
import "./globals.css";

const title = "MiM Digital — Full-Service Digital Marketing Agency";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s — MiM Digital" },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-svh bg-canvas font-body text-fg">{children}</body>
    </html>
  );
}
