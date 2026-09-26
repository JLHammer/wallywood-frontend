import { Button } from "./Button";
import type { ButtonSize } from "./buttonStyles";
import { useCart } from "../../../hooks/useCart";
import type { Poster } from "../../../types";

interface PutInCartButtonProps {
  poster: Poster;
  size?: ButtonSize;
}

export const PutInCartButton = ({ poster, size }: PutInCartButtonProps) => {
  const { addItem, openCart } = useCart();

  const handleClick = () => {
    addItem(poster);
    openCart();
  };

  return (
    <Button size={size} variant="success" onClick={handleClick}>
      Læg i kurv
    </Button>
  );
};
