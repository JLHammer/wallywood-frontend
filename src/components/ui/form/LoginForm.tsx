import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import {
  loginSchema,
  type LoginFormValues,
} from "../../../schemas/loginSchema";
import { ROUTES } from "../../../data/routes";
import { useAuth } from "../../../hooks/useAuth";
import { useLikes } from "../../../hooks/useLikes";
import { FormField } from "./FormField";
import { FormButtonGroup } from "./FormButtonGroup";
import { Button } from "../button/Button";

const LoginFormWrapper = styled.div`
  width: ${theme.mobile.sizes.inputWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.xl};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.inputWidth};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.inputWidth};
  }
`;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.l};
`;

const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
`;

const AccountLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.xxs};

  ${theme.media.desktop} {
    align-items: flex-start;
  }
`;

const accountLinkStyles = css`
  color: ${theme.colors.frostyBlue};
  font-size: ${theme.mobile.fontSizes.formText};

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: ${theme.underlines.thickness};
    text-underline-offset: ${theme.underlines.offset};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.formText};
  }
`;

const AccountButton = styled.button`
  ${accountLinkStyles}
`;

const AccountLink = styled(Link)`
  ${accountLinkStyles}
`;

const emptyValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  "use no memo";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: emptyValues,
  });
  const [status, setStatus] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { likeAfterLogin } = useLikes();
  const { from, likePosterId } =
    (location.state as { from?: string; likePosterId?: number } | null) ?? {};

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    likeAfterLogin(likePosterId ?? null);
    const success = await login(email, password);

    if (!success) {
      likeAfterLogin(null);
      setStatus("Forkert email eller adgangskode.");
      return;
    }

    if (from) navigate(from);
  };

  const onInvalid = () => {
    setStatus("");
  };

  const handleReset = () => {
    reset();
    setStatus("");
  };

  return (
    <LoginFormWrapper>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
        <Fields>
          <FormField
            id="login-email"
            type="email"
            label="Din email"
            placeholder="Indtast din email"
            autoComplete="email"
            registration={register("email")}
            error={errors.email?.message}
            required
          />
          <FormField
            id="login-password"
            type="password"
            label="Din adgangskode"
            placeholder="Indtast din adgangskode"
            autoComplete="current-password"
            registration={register("password")}
            error={errors.password?.message}
            required
          />
        </Fields>
        <FormButtonGroup>
          <Button
            type="submit"
            size="large"
            variant="success"
            disabled={isSubmitting}
          >
            Login
          </Button>
          <Button
            size="large"
            variant="alert"
            disabled={!isDirty}
            onClick={handleReset}
          >
            Annuller
          </Button>
        </FormButtonGroup>
        {status && <p>{status}</p>}
      </LoginFormStyled>

      <AccountLinks>
        <li>
          <AccountButton type="button">Glemt adgangskode?</AccountButton>
        </li>
        <li>
          <AccountLink to={ROUTES.signup}>Opret profil</AccountLink>
        </li>
      </AccountLinks>
    </LoginFormWrapper>
  );
};
