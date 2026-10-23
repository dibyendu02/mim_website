import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactHero, faqItems } from "@/content/contact";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell MiM Digital about your business and book a strategy call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactHero.eyebrow} title={contactHero.heading} body={contactHero.body} />

      <Section id="enquiry" labelledBy="enquiry-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-20">
          <div className="rounded-card border border-line bg-surface/40 p-6 sm:p-8">
            <h2 id="enquiry-heading" className="text-card">
              Tell us about your project
            </h2>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>

          <aside aria-labelledby="direct-heading">
            <h2 id="direct-heading" className="text-card">
              Prefer email?
            </h2>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="eyebrow text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contactDetails.email}`} className="text-lg underline-offset-4 hover:underline">
                    {contactDetails.email}
                  </a>
                </dd>
              </div>
              {contactDetails.phone && (
                <div>
                  <dt className="eyebrow text-muted">Phone</dt>
                  <dd className="mt-1 text-lg">{contactDetails.phone}</dd>
                </div>
              )}
              {contactDetails.address && (
                <div>
                  <dt className="eyebrow text-muted">Location</dt>
                  <dd className="mt-1 text-lg">{contactDetails.address}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </Section>

      <Section labelledBy="faq-heading" tone="surface">
        <h2 id="faq-heading" className="text-section">
          Questions
        </h2>
        <div className="mt-10 max-w-3xl border-t border-line">
          {faqItems.map((item) => (
            <details key={item.question} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden className="text-2xl text-muted transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
