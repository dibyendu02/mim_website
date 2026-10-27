import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/app/fonts";
import { PageShell } from "@/components/layout/PageShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiM Digital — Eastern India's Growth Marketing Partner",
  description:
    "MiM Digital is one of Eastern India's fast-growing marketing companies — performance marketing, social media, content, brand, SEO and websites run as one team for 25+ brands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-body text-text-primary">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
