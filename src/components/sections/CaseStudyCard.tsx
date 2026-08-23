"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/lib/types/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex h-full flex-col overflow-hidden rounded-bento border border-ink/10 bg-surface"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={study.gallery[0]?.src ?? "/placeholders/case-studies/generic-1.svg"}
            alt={study.gallery[0]?.alt ?? study.clientName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge className="border-white/30 bg-surface/90 backdrop-blur">{study.industry}</Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2 text-text-muted">
            <Image src={study.clientLogo} alt={study.clientName} width={80} height={20} className="h-4 w-auto" />
          </div>
          <h3 className="font-display text-lg font-semibold text-ink">{study.headline}</h3>
          <p className="mt-2 text-sm text-text-muted">{study.summary}</p>

          <div className="mt-auto flex items-center justify-between pt-6">
            <p className="font-display text-2xl font-semibold text-brand">
              <AnimatedCounter
                value={study.heroMetric.value}
                prefix={study.heroMetric.prefix}
                suffix={study.heroMetric.suffix}
              />
            </p>
            <span
              aria-hidden
              className="translate-x-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              →
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
