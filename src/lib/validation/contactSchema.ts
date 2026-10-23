import { z } from "zod";

// Spec §5.9 recommended enquiry fields: name, work email, company/brand,
// help needed and an optional budget.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  company: z.string().trim().min(1, "Please enter your company or brand"),
  helpNeeded: z.string().trim().min(10, "Tell us a little more about what you need help with"),
  budget: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
