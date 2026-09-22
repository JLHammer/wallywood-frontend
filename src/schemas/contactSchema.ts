import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Navn skal være mindst 2 tegn."),
  email: z.email("Skriv en gyldig email, fx navn@eksempel.dk."),
  message: z
    .string()
    .trim()
    .min(10, "Beskeden skal være mindst 10 tegn.")
    .max(500, "Beskeden må højst være 500 tegn."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
