import type { Metadata } from "next";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesIntro } from "@/content/home";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media marketing, performance marketing, content production, SEO, brand strategy & identity, and website design & development — working as one integrated marketing system.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title={servicesIntro.heading} body={servicesIntro.body} />

      <div className="container-site">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-heading`}
            className="grid grid-cols-1 gap-8 border-b border-line py-16 last:border-b-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-20"
          >
            <div className="flex items-start gap-5">
              <span className="eyebrow mt-2 text-muted">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <ServiceIcon name={service.icon} className="h-7 w-7" />
                <h2 id={`${service.slug}-heading`} className="mt-5 text-section">
                  {service.title}
                </h2>
              </div>
            </div>
            <div>
              <p className="max-w-[60ch] text-base text-muted sm:text-lg">{service.description}</p>
              <h3 className="eyebrow mt-10 font-body text-fg">What this can include</h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 border-t border-line py-3 text-[0.9375rem]">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-line">
        <FinalCta />
      </div>
    </>
  );
}
