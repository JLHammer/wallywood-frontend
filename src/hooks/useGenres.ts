import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { Genre, GenresResponse } from "../types";

export const useGenre = (id: string | number) =>
  useFetch<Genre>(`${API_URL}/genres/${id}`);

export const useGenres = () => useFetch<GenresResponse>(`${API_URL}/genres`);
