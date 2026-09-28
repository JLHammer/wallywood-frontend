import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Reads the cart state and actions from CartProvider.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};
