import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { selectedWork } from "@/content/home";
import { ctas } from "@/content/site";
import type { CaseStudy } from "@/lib/types/content";

export function SelectedWork({ studies }: { studies: CaseStudy[] }) {
  if (studies.length === 0) return null;

  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow={selectedWork.eyebrow}
        title={selectedWork.heading}
        description={selectedWork.body}
        action={<CTAButton cta={ctas.allCaseStudies} variant="secondary" location="selected-work" />}
      />
      <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {studies.map((study) => (
          <li key={study.slug}>
            <CaseStudyCard study={study} from="home" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
