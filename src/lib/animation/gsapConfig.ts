"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * GSAP is scoped to scrollytelling set-pieces only (ScrollNarrative,
 * KineticHeadline) — everything else (hover states, carousels, simple
 * reveals) uses Framer Motion. Keeping this boundary explicit prevents two
 * animation systems from sprawling into each other's territory.
 */
export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export const easing = {
  standard: "power3.out",
  emphatic: "expo.out",
};
