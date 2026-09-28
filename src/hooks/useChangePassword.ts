import { useState } from "react";
import { API_URL, authHeaders } from "../utils/api";
import { useAuth } from "./useAuth";
import type { ChangePasswordFormValues } from "../schemas/changePasswordSchema";

// confirmPassword is only checked in the form; the API does not take it.
type PasswordChange = Omit<ChangePasswordFormValues, "confirmPassword">;

// Changes the logged-in user's password. Works like useSignup: returns true
// on success, otherwise `error` holds a message ready to show.
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
        headers: authHeaders(token),
        body: JSON.stringify(passwords),
      });

      if (response.ok) {
        return true;
      }

      setError(
        // The API answers 401 when the current password is wrong.
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
