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

const CloseIcon = styled(LuX)`
  width: ${theme.mobile.sizes.closeIconSize};
  height: ${theme.mobile.sizes.closeIconSize};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.closeIconSize};
    height: ${theme.tablet.sizes.closeIconSize};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.closeIconSize};
    height: ${theme.desktop.sizes.closeIconSize};
  }
`;

export const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <CloseButtonStyled type="button" title="Luk" {...props}>
    <CloseIcon />
  </CloseButtonStyled>
);
