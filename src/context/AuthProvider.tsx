import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { API_URL } from "../utils/api";
import type { AuthResponse, User } from "../types";

const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = user !== null;

  const saveLogin = (data: AuthResponse) => {
    setUser(data.user);
    setToken(data.accessToken);
  };

  const clearLogin = () => {
    setUser(null);
    setToken(null);
  };

  const refresh = async () => {
    try {
      const response = await fetch(`${API_URL}/api/refresh`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok && response.status !== 204) {
        saveLogin(await response.json());
      } else {
        clearLogin();
      }
    } catch {
      clearLogin();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await refresh();
      setIsLoading(false);
    });
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(refresh, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) return false;

      saveLogin(await response.json());
      return true;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    clearLogin();

    try {
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
