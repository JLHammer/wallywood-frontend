import { useContext } from "react";
import { LikesContext } from "../context/LikesContext";

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used inside a LikesProvider");
  }
  return context;
};
