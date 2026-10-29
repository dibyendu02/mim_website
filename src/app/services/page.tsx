import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { BentoTile } from "@/components/sections/BentoTile";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { services } from "@/content/services";
import { homeCta } from "@/content/home";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services — MiM Digital",
  description: "Performance marketing, content, social, brand, SEO, and website conversion systems — run as one team.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="What we do"
        headline="Every channel, accountable to one number."
        body="Six disciplines that most agencies split across vendors — run here as a single, connected system."
        size="lg"
      />

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <BentoGrid>
          {services.map((service, index) => (
            <BentoTile
              key={service.slug}
              number={index + 1}
              size={service.bentoSize}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`#${service.slug}`}
              points={service.deliverables}
            />
          ))}
        </BentoGrid>
      </section>

      <div className="mx-auto max-w-[1440px] divide-y divide-ink/10 px-6 sm:px-10">
        {services.map((service, index) => (
          <section key={service.slug} id={service.slug} className="scroll-mt-24 py-section">
            <div
              className={cn(
                "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-bento bg-surface-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                  0{index + 1} — {service.title}
                </p>
                <h2 className="mt-4 text-display-md font-display font-semibold text-ink">
                  {service.shortDescription}
                </h2>
                <p className="mt-6 text-lg text-text-muted">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-3 text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </section>
        ))}
      </div>

      <CTASection content={homeCta} />
    </>
  );
}
