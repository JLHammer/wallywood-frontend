import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Skriv din nuværende adgangskode."),
    newPassword: z
      .string()
      .min(8, "Adgangskoden skal være mindst 8 tegn.")
      .max(72, "Adgangskoden må højst være 72 tegn."),
    confirmPassword: z.string().min(1, "Gentag din nye adgangskode."),
  })
  .refine((values) => values.newPassword === values.confirmPassword, {
    message: "Adgangskoderne er ikke ens.",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
