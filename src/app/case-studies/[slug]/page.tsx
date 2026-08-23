import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { KineticHeadline } from "@/components/sections/KineticHeadline";
import { StatsRow } from "@/components/sections/StatsRow";
import { Gallery } from "@/components/sections/Gallery";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
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
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 sm:px-10 sm:pt-28">
        <div className="flex flex-wrap items-center gap-3">
          <Image src={study.clientLogo} alt={study.clientName} width={100} height={26} className="h-6 w-auto" />
          <Badge>{study.industry}</Badge>
          {study.servicesUsed.map((service) => (
            <span key={service} className="text-sm text-text-muted">
              {service}
            </span>
          ))}
        </div>

        <KineticHeadline text={study.headline} className="mt-8 max-w-4xl text-display-lg" />

        <p className="mt-6 font-display text-display-md font-semibold text-brand">
          <AnimatedCounter value={study.heroMetric.value} prefix={study.heroMetric.prefix} suffix={study.heroMetric.suffix} />
          <span className="ml-3 text-lg font-body font-normal text-text-muted">{study.heroMetric.label}</span>
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <StatsRow metrics={study.metrics} />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-section sm:px-10">
        {[
          { title: "The challenge", body: study.challenge },
          { title: "The approach", body: study.approach },
          { title: "The results", body: study.results },
        ].map((block) => (
          <ScrollReveal key={block.title} className="mb-12">
            <h2 className="font-display text-xl font-semibold text-ink">{block.title}</h2>
            <p className="mt-3 text-lg text-text-muted">{block.body}</p>
          </ScrollReveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <Gallery items={study.gallery} />
      </section>

      {study.testimonial && (
        <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
          <TestimonialCarousel testimonials={[study.testimonial]} />
        </section>
      )}

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
