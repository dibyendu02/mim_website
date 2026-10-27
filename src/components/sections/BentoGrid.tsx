"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4", className)}
    >
      {children}
    </motion.div>
  );
}
