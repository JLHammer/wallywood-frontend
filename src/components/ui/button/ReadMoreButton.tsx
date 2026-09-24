import { ButtonLink } from "./ButtonLink";

interface ReadMoreButtonProps {
  to: string;
}

export const ReadMoreButton = ({ to }: ReadMoreButtonProps) => {
  return <ButtonLink to={to}>Læs mere</ButtonLink>;
};
