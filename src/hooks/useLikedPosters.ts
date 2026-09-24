import { useFetch } from "./useFetch";
import { useAuth } from "./useAuth";
import { API_URL } from "../utils/api";
import type { LikesResponse } from "../types";

export const useLikedPosters = () => {
  const { token } = useAuth();

  return useFetch<LikesResponse>(
    token ? `${API_URL}/likes` : null,
    "GET",
    token,
  );
};
