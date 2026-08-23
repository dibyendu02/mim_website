import { HomeHero } from "@/components/sections/HomeHero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { BentoTile } from "@/components/sections/BentoTile";
import { ScrollNarrative } from "@/components/sections/ScrollNarrative";
import { CaseStudyStrip } from "@/components/sections/CaseStudyStrip";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { homeHero, homeNarrative, homeCta } from "@/content/home";
import { services } from "@/content/services";
import { clientLogos } from "@/content/logos";
import { caseStudies } from "@/content/case-studies";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <HomeHero
        eyebrow={homeHero.eyebrow}
        headline={homeHero.headline}
        body={homeHero.subhead}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
      />

      <section className="border-y border-ink/10 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <LogoMarquee logos={clientLogos} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">What we do</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">
            Six disciplines, run as one system.
          </h2>
        </ScrollReveal>

        <BentoGrid className="mt-12">
          {services.map((service) => (
            <BentoTile
              key={service.slug}
              size={service.bentoSize}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services#${service.slug}`}
            />
          ))}
        </BentoGrid>
      </section>

      <ScrollNarrative eyebrow={homeNarrative.eyebrow} steps={homeNarrative.steps} />

      <CaseStudyStrip studies={caseStudies.slice(0, 3)} />

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <CTASection content={homeCta} />
    </>
  );
}
