import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Skriv en gyldig email, fx navn@eksempel.dk."),
  password: z.string().min(1, "Skriv din adgangskode."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
