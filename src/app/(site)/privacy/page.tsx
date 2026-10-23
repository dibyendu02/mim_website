import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MiM Digital handles personal information.",
};

// TODO(launch): replace with MiM's approved privacy policy. This page exists
// so the footer and enquiry form never link to a dead route, but the policy
// text itself must come from MiM — it is not drafted here.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section labelledBy="privacy-heading">
        <div className="max-w-[65ch] space-y-5 text-muted">
          <h2 id="privacy-heading" className="text-card text-fg">
            Policy pending
          </h2>
          <p>
            Our full privacy policy is being finalised. In the meantime, if you have any questions about how we handle
            information you share with us, please contact{" "}
            <a href={`mailto:${contactDetails.email}`} className="text-fg underline underline-offset-4">
              {contactDetails.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
