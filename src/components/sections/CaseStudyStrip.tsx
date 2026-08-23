import Link from "next/link";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { CaseStudy } from "@/lib/types/content";

export function CaseStudyStrip({
  studies,
  eyebrow = "Results",
  headline = "Real outcomes, not vanity metrics.",
}: {
  studies: CaseStudy[];
  eyebrow?: string;
  headline?: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
      <ScrollReveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-display-md font-display font-semibold text-ink">{headline}</h2>
          </div>
          <Link href="/case-studies" className="text-sm font-semibold text-ink underline underline-offset-4">
            View all case studies
          </Link>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study, index) => (
          <ScrollReveal key={study.slug} delay={index * 0.1}>
            <CaseStudyCard study={study} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
