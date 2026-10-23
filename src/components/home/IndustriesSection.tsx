import { IndustryCard } from "@/components/cards/IndustryCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/content/case-studies";
import { industriesIntro } from "@/content/home";
import { industries } from "@/content/industries";

export function IndustriesSection() {
  return (
    <Section id="industries" labelledBy="industries-heading">
      <SectionHeading
        id="industries-heading"
        eyebrow={industriesIntro.eyebrow}
        title={industriesIntro.heading}
        description={industriesIntro.body}
      />
      <ul className="mt-14 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {industries.map((industry, index) => {
          const hasWork = caseStudies.some((study) => study.industry === industry.slug);
          return (
            <li key={industry.slug}>
              <IndustryCard
                industry={industry}
                index={index}
                workHref={hasWork ? `/case-studies?industry=${industry.slug}` : undefined}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
