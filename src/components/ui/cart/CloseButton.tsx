import type { ButtonHTMLAttributes } from "react";
import { LuX } from "react-icons/lu";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const CloseButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.orange};
  }
`;

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: number;
};

export const CloseButton = ({ size = 28, ...props }: CloseButtonProps) => (
  <CloseButtonStyled type="button" title="Luk" {...props}>
    <LuX size={size} />
  </CloseButtonStyled>
);
