import { useState } from "react";
import { API_URL } from "../utils/api";
import { useAuth } from "./useAuth";
import type { ChangePasswordFormValues } from "../schemas/changePasswordSchema";

type PasswordChange = Omit<ChangePasswordFormValues, "confirmPassword">;

export const useChangePassword = () => {
  const { user, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const changePassword = async (passwords: PasswordChange) => {
    if (!user || !token) {
      setError("Du skal være logget ind for at skifte adgangskode.");
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/users/${user.id}/password`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(passwords),
      });

      if (response.ok) {
        return true;
      }

      setError(
        response.status === 401
          ? "Din nuværende adgangskode er forkert."
          : "Adgangskoden kunne ikke skiftes. Prøv igen senere.",
      );
    } catch {
      setError("Kunne ikke få forbindelse til serveren.");
    } finally {
      setIsLoading(false);
    }

    return false;
  };

  return { changePassword, isLoading, error };
};
