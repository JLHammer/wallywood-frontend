import { Button } from "./Button";
import { useCart } from "../../../hooks/useCart";
import type { Poster } from "../../../types";

interface PutInCartButtonProps {
  poster: Poster;
}

export const PutInCartButton = ({ poster }: PutInCartButtonProps) => {
  const { addItem, openCart } = useCart();

  const handleClick = () => {
    addItem(poster);
    openCart();
  };

  return (
    <Button type="button" onClick={handleClick}>
      Læg i kurv
    </Button>
  );
};
