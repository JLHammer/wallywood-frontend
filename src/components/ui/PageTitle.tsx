import { useCart } from "../../hooks/useCart";

interface PageTitleProps {
  title: string;
}

// Sets the page title in the browser tab
export const PageTitle = ({ title }: PageTitleProps) => {
  const { isOpen } = useCart();

  // If the cart is open, show "Kurv" instead of the page title
  return <title>{`Wallywood | ${isOpen ? "Kurv" : title}`}</title>;
};
