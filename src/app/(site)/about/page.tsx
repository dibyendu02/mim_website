import type { Metadata } from "next";
import Image from "next/image";
import { ApproachSection } from "@/components/home/ApproachSection";
import { FinalCta } from "@/components/home/FinalCta";
import { TeamSection } from "@/components/home/TeamSection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { aboutHero, founderNote } from "@/content/about";
import { teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "MiM Digital is an integrated digital marketing team bringing strategy, creativity and digital execution together for growing brands.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutHero.eyebrow} title={aboutHero.heading} body={aboutHero.body} />

      <Section label="Founder’s note">
        <figure className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-line bg-surface lg:mx-0">
            <Image
              src={founderNote.image.src}
              alt={founderNote.image.alt}
              fill
              sizes="(min-width: 1024px) 380px, 384px"
              className="object-cover object-top grayscale"
            />
          </div>
          <div>
            <Eyebrow>Founder’s note</Eyebrow>
            <blockquote className="mt-6 font-display text-[clamp(1.375rem,2.6vw,2rem)] font-semibold leading-snug tracking-[-0.02em]">
              “{founderNote.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">— {founderNote.role}</figcaption>
          </div>
        </figure>
      </Section>

      <ApproachSection />
      <TeamSection members={teamMembers} />
      <div className="border-t border-line">
        <FinalCta />
      </div>
    </>
  );
}
