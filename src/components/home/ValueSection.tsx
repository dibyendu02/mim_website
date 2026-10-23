import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { value } from "@/content/home";
import { ctas } from "@/content/site";

/**
 * Business value, deliberately not a second set of service cards: an
 * editorial numbered list on the warm ivory surface, which also gives the
 * page one change of pace between dark sections.
 */
export function ValueSection() {
  return (
    <Section id="value" labelledBy="value-heading" tone="ivory">
      <SectionHeading
        id="value-heading"
        onLight
        eyebrow={value.eyebrow}
        title={value.heading}
        description={value.body}
        action={<CTAButton cta={ctas.howWeCanHelp} location="value" />}
      />
      <ol className="mt-14 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {value.items.map((item, index) => (
          <li key={item.title} className="border-t border-ink/15 py-8">
            <span className="font-display text-sm font-semibold text-ink/60">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-card">{item.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
