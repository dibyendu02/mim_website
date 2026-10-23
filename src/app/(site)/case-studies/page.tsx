import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/content/case-studies";
import { selectedWork } from "@/content/home";
import { industries } from "@/content/industries";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected work from MiM Digital across brand, content, social, performance marketing, SEO and web.",
};

export default async function CaseStudiesPage({ searchParams }: PageProps<"/case-studies">) {
  const { industry } = await searchParams;
  const activeIndustry = industries.find((item) => item.slug === industry)?.slug;
  const studies = activeIndustry ? caseStudies.filter((study) => study.industry === activeIndustry) : caseStudies;

  // Only offer filters for industries that actually have work.
  const filters = industries.filter((item) => caseStudies.some((study) => study.industry === item.slug));

  return (
    <>
      <PageHero eyebrow={selectedWork.eyebrow} title={selectedWork.heading} body={selectedWork.body} />

      <Section labelledBy="work-list-heading">
        <h2 id="work-list-heading" className="sr-only">
          {activeIndustry ? `Case studies: ${industries.find((item) => item.slug === activeIndustry)?.title}` : "All case studies"}
        </h2>

        {filters.length > 1 && (
          <nav aria-label="Filter by industry">
            <ul className="flex flex-wrap gap-2">
              <FilterLink href="/case-studies" active={!activeIndustry}>
                All work
              </FilterLink>
              {filters.map((item) => (
                <FilterLink key={item.slug} href={`/case-studies?industry=${item.slug}`} active={activeIndustry === item.slug}>
                  {item.title}
                </FilterLink>
              ))}
            </ul>
          </nav>
        )}

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {studies.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard study={study} from="work" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        scroll={false}
        aria-current={active ? "page" : undefined}
        className={cn(
          "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors duration-200",
          active ? "border-fg bg-fg text-canvas" : "border-line text-muted hover:border-fg/60 hover:text-fg",
        )}
      >
        {children}
      </Link>
    </li>
  );
}
