import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/app/fonts";
import { PageShell } from "@/components/layout/PageShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiM Digital — Integrated Marketing, Built Like a System",
  description:
    "MiM Digital is a full-service digital marketing agency for 25+ brands — performance marketing, content, social, brand, SEO, and website conversion systems run as one team.",
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
