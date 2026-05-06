import { z } from "zod";

export const budgetOptions = [
  "Under €2,500",
  "€2,500 to €5,000",
  "€5,000 to €10,000",
  "€10,000+",
] as const;

export const timelineOptions = [
  "ASAP",
  "This month",
  "Next month",
  "Not sure yet",
] as const;

const optionalSelect = <T extends readonly [string, ...string[]]>(values: T) =>
  z.union([z.enum(values), z.literal("")]).optional().transform((value) => value || undefined);

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  idea: z.string().trim().min(20, "Tell us a little more about the idea."),
  budget: optionalSelect(budgetOptions),
  timeline: optionalSelect(timelineOptions),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
