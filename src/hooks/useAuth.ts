import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Reads the logged-in user and auth actions from AuthProvider.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};
