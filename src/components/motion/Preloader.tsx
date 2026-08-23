"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/useReducedMotion";
import { site } from "@/content/site";

const MIN_VISIBLE_MS = 1200;
const SESSION_KEY = "mim-preloaded";

function wasAlreadyShown() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

/**
 * One-shot loading screen on first paint of a hard page load — gated by
 * sessionStorage so client-side route changes (which don't remount
 * RootLayout) never replay it. Reduced-motion users skip it entirely.
 */
export function Preloader() {
  const reducedMotion = usePrefersReducedMotion();
  const [alreadyShown] = useState(wasAlreadyShown);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldRun = !alreadyShown && !reducedMotion;

  useEffect(() => {
    if (!shouldRun) return;

    document.body.style.overflow = "hidden";
    const startedAt = Date.now();

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + Math.random() * 20, 96));
    }, 140);

    const finish = () => {
      window.clearInterval(progressTimer);
      setProgress(100);
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        sessionStorage.setItem(SESSION_KEY, "1");
      }, remaining + 350);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearInterval(progressTimer);
      window.removeEventListener("load", finish);
    };
  }, [shouldRun]);

  if (!shouldRun) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-text-inverse"
        >
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {site.name}
          </motion.p>

          <div className="mt-8 h-px w-40 overflow-hidden bg-white/15">
            <motion.div
              className="h-full bg-brand-accent"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">{Math.floor(progress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
