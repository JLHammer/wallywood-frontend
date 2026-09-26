import { useEffect, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartItem, Poster } from "../types";

const CART_KEY = "wallywood_cart";

const loadCart = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
  } catch {
    return [];
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  const addItem = (poster: Poster) => {
    setItems((current) => {
      const isInCart = current.some((item) => item.id === poster.id);

      if (isInCart) {
        return current.map((item) =>
          item.id === poster.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      const { id, name, slug, imageUrl, price } = poster;
      return [...current, { id, name, slug, imageUrl, price, quantity: 1 }];
    });
  };

  const removeItem = (posterId: number) => {
    setItems((current) => current.filter((item) => item.id !== posterId));
  };

  const updateQuantity = (posterId: number, quantity: number) => {
    if (quantity < 0) return;

    setItems((current) =>
      current.map((item) =>
        item.id === posterId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
