import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ScrollNarrative } from "@/components/sections/ScrollNarrative";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { aboutHero, founderNote, narrativeSteps, teamValues } from "@/content/about";
import { clientLogos } from "@/content/logos";
import { homeCta } from "@/content/home";

export const metadata: Metadata = {
  title: "About — MiM Digital",
  description: "MiM Digital is an integrated marketing team for 25+ brands, built around structure instead of fragmented vendors.",
};

export default function AboutPage() {
  return (
    <>
      <Hero eyebrow={aboutHero.eyebrow} headline={aboutHero.headline} body={aboutHero.body} />

      <section className="mx-auto max-w-[1440px] px-6 pb-section sm:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-bento border border-ink/10 bg-surface-muted p-8 sm:p-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-40 overflow-hidden rounded-bento bg-ink sm:w-48 lg:w-full lg:mx-0">
              <Image src={founderNote.image} alt="Founder of MiM Digital" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Founder&apos;s note</p>
              <p className="mt-4 text-xl font-medium leading-snug text-ink sm:text-2xl">&ldquo;{founderNote.quote}&rdquo;</p>
              <p className="mt-6 text-sm text-text-muted">— {founderNote.role}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ScrollNarrative steps={narrativeSteps} />

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">How we work</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">
            Values that shape every engagement.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {teamValues.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <div className="h-full rounded-bento border border-ink/10 bg-surface p-8">
                <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-text-muted">{value.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-section sm:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Built for consistency</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-display font-semibold text-ink">
            25+ brands that made growth a system.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center rounded-2xl border border-ink/10 bg-surface p-6">
              <Image src={logo.src} alt={logo.name} width={100} height={26} className="h-6 w-auto opacity-70 grayscale" />
            </div>
          ))}
        </div>
      </section>

      <CTASection content={homeCta} />
    </>
  );
}
