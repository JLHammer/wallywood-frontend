import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { API_URL } from "../utils/api";
import type { Poster, RandomPostersResponse } from "../types";

// The posters are saved in sessionStorage so the front page keeps showing the
// same posters while the tab is open, instead of new ones on every visit.
const RANDOM_POSTERS_KEY = "randomPosters";

const loadRandomPosters = (): Poster[] | null => {
  const saved = sessionStorage.getItem(RANDOM_POSTERS_KEY);
  return saved ? JSON.parse(saved) : null;
};

export const useRandomPosters = (count = 4) => {
  const [savedPosters, setSavedPosters] = useState(loadRandomPosters);
  const { data, error, isLoading, refetch } = useFetch<RandomPostersResponse>(
    savedPosters ? null : `${API_URL}/posters/random?count=${count}`,
  );
  const posters = savedPosters ?? data?.posters ?? [];

  useEffect(() => {
    if (data) {
      sessionStorage.setItem(RANDOM_POSTERS_KEY, JSON.stringify(data.posters));
    }
  }, [data]);

  // Clearing the saved posters enables the request again. refetch is still
  // needed when they were already fetched, because the url does not change.
  const getNewPosters = () => {
    setSavedPosters(null);
    refetch();
  };

  return { posters, error, isLoading, getNewPosters };
};
