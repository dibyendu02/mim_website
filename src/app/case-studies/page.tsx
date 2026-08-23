import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/case-studies";
import { homeCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Case Studies — MiM Digital",
  description: "Real results from MiM Digital's work across performance, content, brand, and SEO.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        eyebrow="Case studies"
        headline="Work we can put a number next to."
        body="A sample of the outcomes behind the 25+ brands we run marketing systems for."
        size="lg"
      />

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <CaseStudiesGrid studies={caseStudies} />
      </section>

      <CTASection content={homeCta} />
    </>
  );
}
