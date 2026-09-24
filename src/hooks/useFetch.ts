import { useEffect, useState } from "react";

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE";

export const useFetch = <T>(
  url: string | null,
  method: HttpMethod = "GET",
  token?: string | null,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(url !== null);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-type": "application/json",
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    };

    fetchData();
  }, [url, method, token, reloadCount]);

  const refetch = () => setReloadCount((count) => count + 1);

  return { data, error, isLoading, refetch };
};
