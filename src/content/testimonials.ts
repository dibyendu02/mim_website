import type { Testimonial } from "@/lib/types/content";
import { caseStudies } from "@/content/case-studies";

// Testimonials are decoupled from case studies but cross-referenceable by
// clientSlug. Pulled from case-study data here so quotes stay tied to a
// real, specific result instead of floating generically.
export const testimonials: Testimonial[] = caseStudies
  .map((study) => study.testimonial)
  .filter((testimonial): testimonial is Testimonial => Boolean(testimonial));
