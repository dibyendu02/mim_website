import type { FaqItem } from "@/lib/types/content";

export const contactHero = {
  eyebrow: "Get in touch",
  headline: "Let's build something that grows.",
  body: "Tell us where growth is stalling and we'll come back with a point of view, not a pitch deck.",
};

export const faqItems: FaqItem[] = [
  {
    question: "What does a first conversation with MiM look like?",
    answer:
      "A 30-minute strategy call where we look at what's working, what isn't, and whether we're a fit — no deck, no obligation.",
  },
  {
    question: "Do you work with brands across all six services, or can we start with one?",
    answer:
      "Most clients start with one or two services and expand as the system proves out. We'll recommend a starting point, not sell you the full stack upfront.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Typically within two weeks of signing — enough time to run a proper audit before the first campaign or sprint kicks off.",
  },
  {
    question: "What size brands do you usually work with?",
    answer:
      "We work best with brands that already have product-market fit and are looking to scale acquisition, retention, or brand — not pre-launch.",
  },
];
