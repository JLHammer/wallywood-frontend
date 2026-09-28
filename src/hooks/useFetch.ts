import { useEffect, useState } from "react";

// Generic GET hook that all data hooks build on. Pass `null` as the url to
// skip the request, e.g. while a required value is missing.
export const useFetch = <T>(url: string | null, token?: string | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(url !== null);
  // Bumping this re-runs the effect, which is how refetch works.
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!url) return;

    // Set in the cleanup when the url changes or the component unmounts, so a
    // slow, outdated response can't overwrite the newest data.
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        if (!ignore) setData(result);
      } catch (error) {
        if (!ignore) {
          setError(error instanceof Error ? error.message : "Unknown error");
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url, token, reloadCount]);

  const refetch = () => setReloadCount((count) => count + 1);

  if (!url) return { data: null, error: null, isLoading: false, refetch };

  return { data, error, isLoading, refetch };
};
