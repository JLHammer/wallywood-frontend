export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export const authHeaders = (token: string | null) => ({
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
});
