"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/types/content";

export function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = useMemo(() => {
    const services = new Set<string>();
    studies.forEach((study) => study.servicesUsed.forEach((service) => services.add(service)));
    return ["All", ...Array.from(services)];
  }, [studies]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return studies;
    return studies.filter((study) => study.servicesUsed.includes(activeFilter));
  }, [studies, activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeFilter === filter
                ? "border-ink bg-ink text-text-inverse"
                : "border-ink/15 text-text-muted hover:border-ink/40 hover:text-ink",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study, index) => (
          <ScrollReveal key={study.slug} delay={(index % 3) * 0.08} className="h-full">
            <CaseStudyCard study={study} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
