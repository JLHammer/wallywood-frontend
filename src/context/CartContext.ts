import { createContext } from "react";
import type { CartItem, Poster } from "../types";

export interface CartContextValue {
  items: CartItem[];
  // Total number of posters, counting quantities.
  count: number;
  // Total price of all lines.
  total: number;
  addItem: (poster: Poster) => void;
  removeItem: (posterId: number) => void;
  updateQuantity: (posterId: number, quantity: number) => void;
  clearCart: () => void;
  // Whether the CartModal is shown.
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

// null by default, so useCart() can throw when used outside CartProvider.
export const CartContext = createContext<CartContextValue | null>(null);
