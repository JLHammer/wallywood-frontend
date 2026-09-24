import { createContext } from "react";
import type { CartItem, Poster } from "../types";

export interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (poster: Poster) => void;
  removeItem: (posterId: number) => void;
  updateQuantity: (posterId: number, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
