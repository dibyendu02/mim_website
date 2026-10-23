import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approach } from "@/content/home";

/** Four numbered steps: horizontal from `lg`, stacked below. */
export function ApproachSection() {
  return (
    <Section id="approach" labelledBy="approach-heading" tone="surface">
      <SectionHeading
        id="approach-heading"
        eyebrow={approach.eyebrow}
        title={approach.heading}
        description={approach.body}
      />
      <ol className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {approach.steps.map((step, index) => (
          <li key={step.title} className="border-t border-line py-8">
            <span className="font-display text-sm font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-card">{step.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
