import { createContext } from "react";

export interface LikesContextValue {
  isLiked: (posterId: number) => boolean;
  // Likes the poster, or removes the like if it is already liked.
  toggleLike: (posterId: number) => Promise<void>;
  // Remembers a poster a guest clicked, so it is liked right after login.
  likeAfterLogin: (posterId: number | null) => void;
}

// null by default, so useLikes() can throw when used outside LikesProvider.
export const LikesContext = createContext<LikesContextValue | null>(null);
