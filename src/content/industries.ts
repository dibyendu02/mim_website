import type { Industry } from "@/lib/types/content";
import { placeholderPhoto } from "@/content/placeholder";

// Approved industry categories and copy (spec §5.5). Imagery is PLACEHOLDER:
// replace with authentic project imagery, or approved licensed imagery that
// is clearly illustrative (not presented as MiM client work).

export const industries: Industry[] = [
  {
    slug: "architecture-interiors",
    title: "Architecture & Interiors",
    description:
      "Showcase design expertise, communicate project value and build a distinctive digital presence in a visually driven industry.",
    image: placeholderPhoto("industry-architecture", "Illustrative image: a contemporary interior space", 1200, 750),
  },
  {
    slug: "hospitality-hotels",
    title: "Hospitality & Hotels",
    description:
      "Showcase exceptional experiences, strengthen brand desirability and connect with audiences looking for their next destination.",
    image: placeholderPhoto("industry-hospitality", "Illustrative image: a hotel setting", 1200, 750),
  },
  {
    slug: "food-beverages",
    title: "Food & Beverages",
    description:
      "Make your offerings stand out through compelling content, consistent brand communication and targeted marketing campaigns.",
    image: placeholderPhoto("industry-food", "Illustrative image: plated food and drinks", 1200, 750),
  },
  {
    slug: "furniture-lifestyle",
    title: "Furniture & Lifestyle",
    description:
      "Turn products and spaces into compelling brand stories through creative content, distinctive positioning and strategic digital marketing.",
    image: placeholderPhoto("industry-furniture", "Illustrative image: furniture in a styled room", 1200, 750),
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
