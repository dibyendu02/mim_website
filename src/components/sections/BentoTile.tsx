"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { BentoSize } from "@/lib/types/content";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sizeClasses: Record<BentoSize, string> = {
  sm: "col-span-2 md:col-span-1 row-span-1",
  md: "col-span-2 row-span-1",
  lg: "col-span-2 row-span-2",
  wide: "col-span-2 md:col-span-4 row-span-1",
};

interface BentoTileProps {
  size: BentoSize;
  title: string;
  description: string;
  icon: string;
  href?: string;
  className?: string;
}

export function BentoTile({ size, title, description, icon, href, className }: BentoTileProps) {
  const content = (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-bento border border-ink/10 bg-surface p-6 sm:p-8",
        sizeClasses[size],
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <ServiceIcon name={icon} className="transition-colors duration-300 group-hover:bg-brand group-hover:text-text-inverse" />
        {href && (
          <span
            aria-hidden
            className="translate-x-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            →
          </span>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-text-muted sm:text-base">{description}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="contents">
        {content}
      </Link>
    );
  }

  return content;
}
