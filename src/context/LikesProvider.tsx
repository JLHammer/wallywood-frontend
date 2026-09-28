import { useEffect, useRef, useState, type ReactNode } from "react";
import { LikesContext } from "./LikesContext";
import { useAuth } from "../hooks/useAuth";
import { API_URL, authHeaders } from "../utils/api";
import type { LikesResponse } from "../types";

interface LikesProviderProps {
  children: ReactNode;
}

// Keeps the logged-in user's liked poster ids. Must sit inside AuthProvider.
export const LikesProvider = ({ children }: LikesProviderProps) => {
  const { token } = useAuth();
  const [likedPosterIds, setLikedPosterIds] = useState<number[]>([]);
  // A ref, not state: changing it should not re-render anything.
  const pendingLikeRef = useRef<number | null>(null);

  const likeAfterLogin = (posterId: number | null) => {
    pendingLikeRef.current = posterId;
  };

  // Runs on login (when a token appears).
  // Fetches with plain fetch instead of useFetch, because a like the guest
  // clicked before logging in must be saved before the list is loaded.
  useEffect(() => {
    if (!token) return;

    const fetchLikes = async () => {
      try {
        const pendingPosterId = pendingLikeRef.current;
        if (pendingPosterId !== null) {
          pendingLikeRef.current = null;
          await fetch(`${API_URL}/likes`, {
            method: "POST",
            headers: authHeaders(token),
            body: JSON.stringify({ posterId: pendingPosterId }),
          });
        }

        const response = await fetch(`${API_URL}/likes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) return;

        const data: LikesResponse = await response.json();
        setLikedPosterIds(data.likes.map((like) => like.posterId));
      } catch {}
    };

    fetchLikes();
  }, [token]);

  // Checks the token too, so hearts clear right away on logout.
  const isLiked = (posterId: number) =>
    token !== null && likedPosterIds.includes(posterId);

  // DELETE if liked, POST if not; local state updates only when the API succeeds.
  const toggleLike = async (posterId: number) => {
    const liked = isLiked(posterId);

    try {
      const response = await fetch(
        liked ? `${API_URL}/likes/${posterId}` : `${API_URL}/likes`,
        {
          method: liked ? "DELETE" : "POST",
          headers: authHeaders(token),
          ...(!liked && { body: JSON.stringify({ posterId }) }),
        },
      );
      if (!response.ok) return;

      setLikedPosterIds((ids) =>
        liked ? ids.filter((id) => id !== posterId) : [...ids, posterId],
      );
    } catch {}
  };

  return (
    <LikesContext.Provider value={{ isLiked, toggleLike, likeAfterLogin }}>
      {children}
    </LikesContext.Provider>
  );
};
