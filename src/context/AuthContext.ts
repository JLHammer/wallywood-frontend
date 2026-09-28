import { createContext } from "react";
import type { User } from "../types";

export interface AuthContextValue {
  user: User | null;
  token: string | null;
  // True until the first refresh has checked for an existing login.
  isLoading: boolean;
  // Resolves to true on success, false on wrong credentials or network error.
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

// null by default, so useAuth() can throw when used outside AuthProvider.
export const AuthContext = createContext<AuthContextValue | null>(null);
