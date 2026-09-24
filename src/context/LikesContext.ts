import { createContext } from "react";

export interface LikesContextValue {
  isLiked: (posterId: number) => boolean;
  toggleLike: (posterId: number) => Promise<void>;
  likeAfterLogin: (posterId: number | null) => void;
}

export const LikesContext = createContext<LikesContextValue | null>(null);
