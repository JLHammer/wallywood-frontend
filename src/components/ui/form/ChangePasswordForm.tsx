import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import {
  changePasswordSchema,
  type ChangePasswordFormValues,
} from "../../../schemas/changePasswordSchema";
import { useChangePassword } from "../../../hooks/useChangePassword";
import { ROUTES } from "../../../data/routes";
import { FormField } from "./FormField";
import { FormButtonGroup } from "./FormButtonGroup";
import { Button } from "../button/Button";

const ChangePasswordFormStyled = styled.form`
  width: ${theme.mobile.sizes.inputWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.l};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.inputWidth};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.inputWidth};
  }
`;

const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
`;

const ErrorText = styled.p`
  color: ${theme.colors.orange};
`;

const emptyValues: ChangePasswordFormValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const ChangePasswordForm = () => {
  "use no memo";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: emptyValues,
  });
  const { changePassword, isLoading, error } = useChangePassword();
  const [isChanged, setIsChanged] = useState(false);

  const onSubmit = async ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    const success = await changePassword({ currentPassword, newPassword });

    if (success) {
      setIsChanged(true);
      reset();
    }
  };

  if (isChanged) {
    return (
      <>
        <p>Din adgangskode er skiftet.</p>
        <Button to={ROUTES.login} size="large">
          Tilbage til profil
        </Button>
      </>
    );
  }

  return (
    <ChangePasswordFormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <Fields>
        <FormField
          id="change-password-current"
          type="password"
          label="Nuværende adgangskode"
          placeholder="Indtast din nuværende adgangskode"
          autoComplete="current-password"
          registration={register("currentPassword")}
          error={errors.currentPassword?.message}
          required
        />
        <FormField
          id="change-password-new"
          type="password"
          label="Ny adgangskode"
          placeholder="Mindst 8 tegn"
          autoComplete="new-password"
          registration={register("newPassword")}
          error={errors.newPassword?.message}
          required
        />
        <FormField
          id="change-password-confirm"
          type="password"
          label="Gentag ny adgangskode"
          placeholder="Indtast den nye adgangskode igen"
          autoComplete="new-password"
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
          required
        />
      </Fields>
      <FormButtonGroup>
        <Button
          type="submit"
          size="large"
          variant="success"
          disabled={isLoading}
        >
          {isLoading ? "Gemmer..." : "Gem"}
        </Button>
        <Button
          size="large"
          variant="alert"
          disabled={!isDirty}
          onClick={() => reset()}
        >
          Annuller
        </Button>
      </FormButtonGroup>
      {error && <ErrorText>{error}</ErrorText>}
    </ChangePasswordFormStyled>
  );
};
