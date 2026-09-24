import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { Poster, PostersResponse } from "../types";

interface PostersQuery {
  page?: number;
  limit?: number;
  sortBy?: "createdAt" | "name" | "price";
  sort?: "asc" | "desc";
  genreId?: number;
  genreSlug?: string;
}

export const usePoster = (slug: string) =>
  useFetch<Poster>(`${API_URL}/posters/slug/${slug}`);

export const usePosters = (query: PostersQuery = {}) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) params.set(key, String(value));
  });

  return useFetch<PostersResponse>(`${API_URL}/posters?${params}`);
};

const RANDOM_POSTERS_KEY = "randomPosters";

const loadRandomPosters = (): Poster[] | null => {
  const saved = sessionStorage.getItem(RANDOM_POSTERS_KEY);
  return saved ? JSON.parse(saved) : null;
};

export const useRandomPosters = (count = 4) => {
  const [savedPosters, setSavedPosters] = useState(loadRandomPosters);
  const { data, error, isLoading, refetch } = useFetch<{ posters: Poster[] }>(
    savedPosters ? null : `${API_URL}/posters/random?count=${count}`,
  );
  const posters = savedPosters ?? data?.posters ?? null;

  useEffect(() => {
    if (data) {
      sessionStorage.setItem(RANDOM_POSTERS_KEY, JSON.stringify(data.posters));
    }
  }, [data]);

  const getNewPosters = () => {
    setSavedPosters(null);
    refetch();
  };

  return { posters, error, isLoading, getNewPosters };
};
