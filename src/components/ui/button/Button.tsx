import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import styled from "styled-components";
import {
  buttonStyles,
  type ButtonSize,
  type ButtonStyleProps,
  type ButtonVariant,
} from "./buttonStyles";

const ButtonStyled = styled.button<ButtonStyleProps>`
  ${buttonStyles}
`;

const ButtonLinkStyled = styled(Link)<ButtonStyleProps>`
  ${buttonStyles}
`;

interface ButtonBaseProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  isActive?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };

type ButtonAsLink = ButtonBaseProps & LinkProps;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  size = "small",
  variant = "default",
  isActive = false,
  ...props
}: ButtonProps) => {
  const styleProps = { $size: size, $variant: variant, $isActive: isActive };

  if (props.to !== undefined) {
    return <ButtonLinkStyled {...styleProps} {...(props as LinkProps)} />;
  }

  return (
    <ButtonStyled
      type="button"
      {...styleProps}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};
