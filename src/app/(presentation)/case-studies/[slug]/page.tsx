import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyCarousel } from "@/components/case-study/CaseStudyCarousel";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case Study`,
    description: study.summary,
    openGraph: { title: `${study.client} — MiM Digital Case Study`, description: study.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const next = caseStudies.length > 1 ? caseStudies[(index + 1) % caseStudies.length] : undefined;

  // Keyed by slug so moving to the next study starts again at slide one.
  return (
    <CaseStudyCarousel
      key={study.slug}
      study={study}
      next={next && { slug: next.slug, client: next.client }}
    />
  );
}
