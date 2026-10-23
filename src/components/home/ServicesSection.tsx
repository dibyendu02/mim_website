import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesIntro } from "@/content/home";
import { services } from "@/content/services";
import { ctas } from "@/content/site";

export function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        title={servicesIntro.heading}
        description={servicesIntro.body}
        action={<CTAButton cta={ctas.exploreServices} variant="secondary" location="services" />}
      />
      <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.slug}>
            <ServiceCard service={service} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
