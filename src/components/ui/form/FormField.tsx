import type { HTMLInputAutoCompleteAttribute } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

const FormFieldStyled = styled.p`
  width: ${theme.mobile.sizes.inputWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.xxxs};
  font-size: ${theme.mobile.fontSizes.formText};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.inputWidth};
    font-size: ${theme.tablet.fontSizes.formText};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.inputWidth};
    font-size: ${theme.desktop.fontSizes.formText};
  }
`;

const Required = styled.span`
  color: ${theme.colors.orange};
`;

const ErrorText = styled.span`
  color: ${theme.colors.orange};
`;

const fieldStyles = css<{ $hasError: boolean }>`
  width: 100%;
  padding: 0 ${theme.mobile.spacing.s};
  background-color: ${theme.colors.inputBackground};
  border: none;
  border-top: ${theme.borders.width} solid ${theme.colors.rosyBeige};
  box-shadow: ${theme.shadows.inputInset};
  border-radius: ${theme.radii.input};

  &:focus-visible {
    outline: ${theme.outlines.width} solid ${theme.colors.orange};
    border: none;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-top-color: ${theme.colors.orange};
      outline-color: ${theme.colors.orange};
    `}
`;

const Input = styled.input<{ $hasError: boolean }>`
  ${fieldStyles}
  height: ${theme.mobile.sizes.inputHeight};

  ${theme.media.tablet} {
    height: ${theme.tablet.sizes.inputHeight};
  }

  ${theme.media.desktop} {
    height: ${theme.desktop.sizes.inputHeight};
  }
`;

const Textarea = styled.textarea<{ $hasError: boolean }>`
  ${fieldStyles}
  height: ${theme.mobile.sizes.textareaHeight};
  padding-top: ${theme.mobile.spacing.xxs};

  ${theme.media.tablet} {
    height: ${theme.tablet.sizes.textareaHeight};
  }

  ${theme.media.desktop} {
    height: ${theme.desktop.sizes.textareaHeight};
  }
`;

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  autoComplete: HTMLInputAutoCompleteAttribute;
  type?: "text" | "email" | "password";
  multiline?: boolean;
  required?: boolean;
  error?: string;
};

export const FormField = ({
  id,
  label,
  placeholder,
  registration,
  autoComplete,
  type = "text",
  multiline = false,
  required = false,
  error,
}: FormFieldProps) => {
  const fieldProps = {
    id,
    placeholder,
    autoComplete,
    required,
    $hasError: Boolean(error),
    ...registration,
  };

  return (
    <FormFieldStyled>
      <label htmlFor={id}>
        {label}: {required && <Required>*</Required>}
      </label>
      {multiline ? (
        <Textarea {...fieldProps} />
      ) : (
        <Input type={type} {...fieldProps} />
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </FormFieldStyled>
  );
};
