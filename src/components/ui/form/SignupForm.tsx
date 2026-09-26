import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import {
  signupSchema,
  type SignupFormValues,
} from "../../../schemas/signupSchema";
import { useSignup } from "../../../hooks/useSignup";
import { ROUTES } from "../../../data/routes";
import { FormField } from "./FormField";
import { FormButtonGroup } from "./FormButtonGroup";
import { Button } from "../button/Button";

const SignupFormStyled = styled.form`
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

const emptyValues: SignupFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignupForm = () => {
  "use no memo";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: emptyValues,
  });
  const { signup, isLoading, error } = useSignup();
  const [createdName, setCreatedName] = useState("");

  const onSubmit = async (values: SignupFormValues) => {
    const { firstName, lastName, email, password } = values;
    const isCreated = await signup({ firstName, lastName, email, password });

    if (isCreated) {
      setCreatedName(firstName);
      reset();
    }
  };

  if (createdName) {
    return (
      <>
        <p>Velkommen, {createdName}! Din profil er oprettet.</p>
        <Button to={ROUTES.login}>Gå til login</Button>
      </>
    );
  }

  return (
    <SignupFormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <Fields>
        <FormField
          id="signup-first-name"
          label="Dit fornavn"
          placeholder="Indtast dit fornavn"
          autoComplete="given-name"
          registration={register("firstName")}
          error={errors.firstName?.message}
          required
        />
        <FormField
          id="signup-last-name"
          label="Dit efternavn"
          placeholder="Indtast dit efternavn"
          autoComplete="family-name"
          registration={register("lastName")}
          error={errors.lastName?.message}
          required
        />
        <FormField
          id="signup-email"
          type="email"
          label="Din email"
          placeholder="Indtast din email"
          autoComplete="email"
          registration={register("email")}
          error={errors.email?.message}
          required
        />
        <FormField
          id="signup-password"
          type="password"
          label="Din adgangskode"
          placeholder="Mindst 8 tegn"
          autoComplete="new-password"
          registration={register("password")}
          error={errors.password?.message}
          required
        />
        <FormField
          id="signup-confirm-password"
          type="password"
          label="Gentag adgangskode"
          placeholder="Indtast adgangskoden igen"
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
          {isLoading ? "Opretter..." : "Opret profil"}
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
    </SignupFormStyled>
  );
};
