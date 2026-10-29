import { HomeHero } from "@/components/sections/HomeHero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { BentoTile } from "@/components/sections/BentoTile";
import { CaseStudyStrip } from "@/components/sections/CaseStudyStrip";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { ProcessScroller } from "@/components/sections/ProcessScroller";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { homeHero, homeWork, homeServices, homeIndustries, homeApproach, homeTeam, homeValue, homeCta } from "@/content/home";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { clientLogos } from "@/content/logos";
import { caseStudies } from "@/content/case-studies";
import { team } from "@/content/team";

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

      <CaseStudyStrip studies={caseStudies.slice(0, 3)} eyebrow={homeWork.eyebrow} headline={homeWork.headline} body={homeWork.body} />

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{homeServices.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">{homeServices.headline}</h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{homeServices.body}</p>
        </ScrollReveal>

        <BentoGrid className="mt-12">
          {services.map((service, index) => (
            <BentoTile
              key={service.slug}
              number={index + 1}
              size={service.bentoSize}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services#${service.slug}`}
              points={service.deliverables}
            />
          ))}
        </BentoGrid>

        <div className="mt-12">
          <Button href={homeServices.cta.href} arrow="external">
            {homeServices.cta.label}
          </Button>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink text-text-inverse">
        <div className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{homeIndustries.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-display-md font-display font-semibold">{homeIndustries.headline}</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/70">{homeIndustries.body}</p>
          </ScrollReveal>

          <div className="mt-16">
            <IndustryGrid industries={industries} />
          </div>
        </div>
      </section>

      <ProcessScroller
        eyebrow={homeApproach.eyebrow}
        headline={homeApproach.headline}
        body={homeApproach.body}
        steps={homeApproach.steps}
      />

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">{homeValue.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">{homeValue.headline}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">{homeValue.body}</p>
          </ScrollReveal>

          <div className="mt-12">
            <ValueGrid benefits={homeValue.benefits} />
          </div>

          <div className="mt-12">
            <Button href={homeValue.cta.href} arrow="external">
              {homeValue.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{homeTeam.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">{homeTeam.headline}</h2>
        </ScrollReveal>

        <div className="mt-12">
          <TeamGrid members={team} />
        </div>
      </section>

      <CTASection content={homeCta} />
    </>
  );
}
