import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Service } from "@/lib/types/content";

/**
 * The title is the link; its ::after stretches over the whole card so the
 * card is clickable while the link's accessible name stays the service name.
 */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-fg/30 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent sm:p-8">
      <div className="flex items-start justify-between">
        <ServiceIcon name={service.icon} />
        <span className="eyebrow text-muted">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-10 text-card">
        <Link
          href={`/services#${service.slug}`}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{service.description}</p>
      <ArrowUpRight
        aria-hidden
        className="mt-auto h-5 w-5 translate-y-1 text-muted opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
      />
    </article>
  );
}
