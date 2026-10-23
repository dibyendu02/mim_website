import { ApproachSection } from "@/components/home/ApproachSection";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ValueSection } from "@/components/home/ValueSection";
import { featuredCaseStudies } from "@/content/case-studies";
import { clientLogos } from "@/content/logos";
import { teamMembers } from "@/content/team";

// Homepage section order per the implementation spec §2 (01–09; the footer
// closes section 09 from the shared site layout). Section numbers are
// editorial only — not shown in the UI.
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientLogoStrip logos={clientLogos} />
      <SelectedWork studies={featuredCaseStudies} />
      <ServicesSection />
      <IndustriesSection />
      <ApproachSection />
      <ValueSection />
      <TeamSection members={teamMembers} />
      <FinalCta />
    </>
  );
}
