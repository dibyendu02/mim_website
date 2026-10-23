import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { finalCta } from "@/content/home";
import { ctas } from "@/content/site";

export function FinalCta() {
  return (
    <Section id="contact" labelledBy="final-cta-heading" spacing="py-[clamp(5rem,12vw,11rem)]">
      <Eyebrow>{finalCta.eyebrow}</Eyebrow>
      <h2 id="final-cta-heading" className="mt-6 max-w-4xl text-[clamp(2.25rem,4.8vw,4.5rem)] leading-[1.06] tracking-[-0.035em]">
        {finalCta.heading}
      </h2>
      <p className="mt-8 max-w-[44rem] text-base text-muted sm:text-lg">{finalCta.body}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <CTAButton cta={ctas.bookCall} location="final-cta" />
        <CTAButton cta={ctas.tellUs} variant="text" arrow="right" location="final-cta" />
      </div>
    </Section>
  );
}
