import { useEffect, useRef, useState, type ReactNode } from "react";
import { LikesContext } from "./LikesContext";
import { useAuth } from "../hooks/useAuth";
import { API_URL } from "../utils/api";
import type { LikesResponse } from "../types";

interface LikesProviderProps {
  children: ReactNode;
}

export const LikesProvider = ({ children }: LikesProviderProps) => {
  const { token } = useAuth();
  const [likedPosterIds, setLikedPosterIds] = useState<number[]>([]);
  const pendingLikeRef = useRef<number | null>(null);

  const likeAfterLogin = (posterId: number | null) => {
    pendingLikeRef.current = posterId;
  };

  useEffect(() => {
    if (!token) return;

    const fetchLikes = async () => {
      try {
        const pendingPosterId = pendingLikeRef.current;
        if (pendingPosterId !== null) {
          pendingLikeRef.current = null;
          await fetch(`${API_URL}/likes`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
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

  const isLiked = (posterId: number) =>
    token !== null && likedPosterIds.includes(posterId);

  const toggleLike = async (posterId: number) => {
    const liked = isLiked(posterId);

    try {
      const response = await fetch(
        liked ? `${API_URL}/likes/${posterId}` : `${API_URL}/likes`,
        {
          method: liked ? "DELETE" : "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
