import { useCart } from "../../hooks/useCart";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  const { isOpen } = useCart();

  return <title>{`Wallywood | ${isOpen ? "Kurv" : title}`}</title>;
};
