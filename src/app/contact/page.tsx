import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { contactHero, faqItems } from "@/content/contact";
import { contactDetails, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — MiM Digital",
  description: "Book a strategy call with MiM Digital.",
};

export default function ContactPage() {
  return (
    <>
      <Hero eyebrow={contactHero.eyebrow} headline={contactHero.headline} body={contactHero.body} size="lg" />

      <section id="project-form" className="mx-auto max-w-[1440px] scroll-mt-24 px-6 pb-section sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="rounded-bento border border-ink/10 bg-surface p-8 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex h-full flex-col justify-between rounded-bento bg-ink p-8 text-text-inverse sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-semibold">Direct lines</h2>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-sm uppercase tracking-wide text-white/50">Email</dt>
                    <dd className="mt-1 text-lg">{contactDetails.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wide text-white/50">Phone</dt>
                    <dd className="mt-1 text-lg">{contactDetails.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm uppercase tracking-wide text-white/50">Office</dt>
                    <dd className="mt-1 text-lg">{contactDetails.address}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-section sm:px-10">
        <ScrollReveal>
          <h2 className="text-display-md font-display font-semibold text-ink">Frequently asked</h2>
        </ScrollReveal>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
