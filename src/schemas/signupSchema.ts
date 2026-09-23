import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().trim().min(1, "Skriv dit fornavn."),
    lastName: z.string().trim().min(1, "Skriv dit efternavn."),
    email: z
      .email("Skriv en gyldig email, fx navn@eksempel.dk.")
      .max(254, "Emailen må højst være 254 tegn."),
    password: z
      .string()
      .min(8, "Adgangskoden skal være mindst 8 tegn.")
      .max(72, "Adgangskoden må højst være 72 tegn."),
    confirmPassword: z.string().min(1, "Gentag din adgangskode."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Adgangskoderne er ikke ens.",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
