import { useContext } from "react";
import { LikesContext } from "../context/LikesContext";

// Reads the liked poster ids and toggleLike from LikesProvider.
// Throws outside the provider, like useAuth.
export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used inside a LikesProvider");
  }
  return context;
};
