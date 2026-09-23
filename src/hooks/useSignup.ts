import { useState } from "react";
import { API_URL } from "../utils/api";
import type { SignupFormValues } from "../schemas/signupSchema";

type NewUser = Omit<SignupFormValues, "confirmPassword">;

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (user: NewUser) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        return true;
      }

      setError(
        response.status === 409
          ? "Der findes allerede en profil med den email."
          : "Profilen kunne ikke oprettes. Prøv igen senere.",
      );
    } catch {
      setError("Kunne ikke få forbindelse til serveren.");
    } finally {
      setIsLoading(false);
    }

    return false;
  };

  return { signup, isLoading, error };
};
