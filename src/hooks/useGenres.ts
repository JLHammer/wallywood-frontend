import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { GenresResponse } from "../types";

// Fetches all genres for the genre navigation.
export const useGenres = () => {
  const { data, error, isLoading } = useFetch<GenresResponse>(
    `${API_URL}/genres`,
  );

  return { genres: data?.genres ?? [], error, isLoading };
};
