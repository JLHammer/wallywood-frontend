import { Button } from "./Button";

interface ReadMoreButtonProps {
  to: string;
}

export const ReadMoreButton = ({ to }: ReadMoreButtonProps) => {
  return (
    <Button to={to} size="large">
      Læs mere
    </Button>
  );
};
