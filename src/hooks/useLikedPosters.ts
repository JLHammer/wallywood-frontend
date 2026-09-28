import { useFetch } from "./useFetch";
import { useAuth } from "./useAuth";
import { API_URL } from "../utils/api";
import type { LikesResponse } from "../types";

// Fetches the full posters the logged-in user has liked, for the favorites page.
export const useLikedPosters = () => {
  const { token } = useAuth();
  const { data, error, isLoading } = useFetch<LikesResponse>(
    // Guests have no token, so the request is skipped.
    token ? `${API_URL}/likes` : null,
    token,
  );

  return {
    posters: data?.likes.map((like) => like.poster) ?? [],
    error,
    isLoading,
  };
};
