"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIndustry } from "@/content/industries";
import { track } from "@/lib/analytics";
import type { CaseStudy } from "@/lib/types/content";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Where the card lives; the presentation's close action returns here. */
  from: "home" | "work";
  sizes?: string;
}

export function CaseStudyCard({ study, from, sizes = "(min-width: 1024px) 620px, 100vw" }: CaseStudyCardProps) {
  const industry = getIndustry(study.industry);

  return (
    <article className="group relative flex flex-col rounded-card has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-8 has-[a:focus-visible]:outline-accent">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-surface">
        <Image
          src={study.cover.src}
          alt={study.cover.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow text-muted">
            {industry?.title}
            <span aria-hidden className="mx-2 text-line">
              /
            </span>
            {study.category}
          </p>
          <h3 className="mt-2 text-card">
            <Link
              href={`/case-studies/${study.slug}?from=${from}`}
              onClick={() => track("case_study_open", { slug: study.slug, location: from })}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {study.client}
            </Link>
          </h3>
          <p className="mt-1 text-[0.9375rem] text-muted">{study.project}</p>
        </div>
        <span
          aria-hidden
          className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
