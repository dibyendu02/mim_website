import { HomeHero } from "@/components/sections/HomeHero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { BentoTile } from "@/components/sections/BentoTile";
import { CaseStudyStrip } from "@/components/sections/CaseStudyStrip";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { homeHero, homeWork, homeServices, homeTeam, homeCta } from "@/content/home";
import { services } from "@/content/services";
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

      <CaseStudyStrip studies={caseStudies.slice(0, 3)} eyebrow={homeWork.eyebrow} headline={homeWork.headline} />

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{homeServices.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">{homeServices.headline}</h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{homeServices.body}</p>
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
              points={service.deliverables}
            />
          ))}
        </BentoGrid>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{homeTeam.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">{homeTeam.headline}</h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{homeTeam.body}</p>
        </ScrollReveal>

        <div className="mt-12">
          <TeamGrid members={team} />
        </div>
      </section>

      <CTASection content={homeCta} />
    </>
  );
}
