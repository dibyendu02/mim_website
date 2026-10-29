import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/sections/CaseStudyHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { Gallery } from "@/components/sections/Gallery";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyChapter } from "@/components/sections/CaseStudyChapter";
import { caseStudies } from "@/content/case-studies";
import { homeCta } from "@/content/home";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: `${study.clientName} — MiM Digital Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <>
      <CaseStudyHero study={study} />

      <div className="mx-auto max-w-[1440px] divide-y divide-ink/10 px-6 sm:px-10">
        <CaseStudyChapter number={1} title="The Introduction">
          <p className="text-lg text-text-muted">{study.introduction}</p>
          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
            {[
              { term: "Client", detail: study.clientName },
              { term: "Industry", detail: study.industry },
              { term: "Services", detail: study.servicesUsed.join(", ") },
            ].map((fact) => (
              <div key={fact.term}>
                <dt className="text-sm text-text-muted">{fact.term}</dt>
                <dd className="mt-1 font-semibold text-ink">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </CaseStudyChapter>

        <CaseStudyChapter number={2} title="The Challenge">
          <p className="text-lg text-text-muted">{study.challenge}</p>
        </CaseStudyChapter>

        <CaseStudyChapter number={3} title="The Strategy">
          <p className="text-lg text-text-muted">{study.strategy}</p>
        </CaseStudyChapter>

        <CaseStudyChapter number={4} title="The Creative Direction">
          <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
            &ldquo;{study.creativeDirection.concept}&rdquo;
          </p>
          <p className="mt-4 text-lg text-text-muted">{study.creativeDirection.body}</p>
        </CaseStudyChapter>

        <CaseStudyChapter number={5} title="The Execution">
          <p className="text-lg text-text-muted">{study.execution.body}</p>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {study.execution.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-3 py-4 font-medium text-ink">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                {deliverable}
              </li>
            ))}
          </ul>
        </CaseStudyChapter>

        <CaseStudyChapter number={6} title="The Work" wide>
          <Gallery items={study.gallery} />
        </CaseStudyChapter>

        <CaseStudyChapter number={7} title="The Outcomes">
          <StatsRow metrics={study.metrics} className="sm:grid-cols-3" />
          <p className="mt-10 text-lg text-text-muted">{study.outcomes}</p>
        </CaseStudyChapter>

        <CaseStudyChapter number={8} title="The Conclusion">
          <p className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">{study.conclusion}</p>
        </CaseStudyChapter>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
          <h2 className="text-display-md font-display font-semibold text-ink">Related case studies</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <CaseStudyCard key={item.slug} study={item} />
            ))}
          </div>
        </section>
      )}

      <CTASection content={homeCta} />
    </>
  );
}
