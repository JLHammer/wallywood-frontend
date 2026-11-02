export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// Returns headers for authenticated requests, along with the token in the Authorization header
export const authHeaders = (token: string | null) => ({
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
});
