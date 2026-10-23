import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/lib/types/content";

interface IndustryCardProps {
  industry: Industry;
  index: number;
  /** Only set when relevant case studies exist — spec §5.5: no dead ends. */
  workHref?: string;
}

export function IndustryCard({ industry, index, workHref }: IndustryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface">
      <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
        <Image
          src={industry.image.src}
          alt={industry.image.alt}
          fill
          sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale-[35%]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="eyebrow text-muted">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-3 text-card">{industry.title}</h3>
        <p className="mt-3 max-w-[55ch] text-[0.9375rem] leading-relaxed text-muted">{industry.description}</p>
        {workHref && (
          <Link
            href={workHref}
            className="group mt-6 inline-flex items-center gap-2 self-start py-1 text-sm font-semibold text-fg underline-offset-4 hover:underline"
          >
            See {industry.title.toLowerCase()} work
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
