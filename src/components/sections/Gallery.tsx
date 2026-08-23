"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LazyVideo } from "@/components/motion/LazyVideo";
import type { GalleryItem } from "@/lib/types/content";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={item.src + index}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-bento border border-ink/10"
          >
            {item.type === "video" ? (
              <LazyVideo src={item.src} poster={item.poster ?? item.src} className="h-full w-full" />
            ) : (
              <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              {openItem.type === "video" ? (
                <LazyVideo src={openItem.src} poster={openItem.poster ?? openItem.src} className="w-full" />
              ) : (
                <div className="relative aspect-[4/3] w-full">
                  <Image src={openItem.src} alt={openItem.alt} fill className="object-contain" />
                </div>
              )}
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setOpenIndex(null)}
                className="absolute -top-10 right-0 text-sm font-semibold text-text-inverse"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
