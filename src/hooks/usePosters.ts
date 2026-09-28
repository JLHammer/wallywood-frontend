import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { PostersResponse } from "../types";

interface PostersQuery {
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "name" | "price";
  sort?: "asc" | "desc";
  genreId?: number;
  genreSlug?: string;
}

// Fetches one page of posters, filtered and sorted by the given query.
export const usePosters = (query: PostersQuery = {}) => {
  // Only send the params that are set, so the API uses its defaults for the rest.
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) params.set(key, String(value));
  });

  const { data, error, isLoading } = useFetch<PostersResponse>(
    `${API_URL}/posters?${params}`,
  );

  return {
    posters: data?.posters ?? [],
    total: data?.total ?? 0,
    totalPages: data?.totalPages ?? 0,
    error,
    isLoading,
  };
};
