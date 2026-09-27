import { Button } from "./Button";
import { ROUTES } from "../../../router/routes";

export const ChangePasswordButton = () => {
  return (
    <Button to={ROUTES.changePassword} size="large">
      Skift kodeord
    </Button>
  );
};
