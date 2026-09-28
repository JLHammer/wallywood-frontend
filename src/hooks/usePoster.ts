import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { Poster } from "../types";

// Fetches a single poster by the slug from the URL.
export const usePoster = (slug: string) => {
  const { data, error, isLoading } = useFetch<Poster>(
    `${API_URL}/posters/slug/${slug}`,
  );

  return { poster: data, error, isLoading };
};
