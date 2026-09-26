import { css } from "styled-components";
import { theme } from "../../../styles/theme";

export type ButtonSize = "small" | "large" | "icon" | "iconLarge" | "square";
export type ButtonVariant = "default" | "success" | "alert";

export interface ButtonStyleProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $isActive: boolean;
}

const sizeStyles = {
  small: css`
    width: ${theme.mobile.sizes.buttonWidth};
    height: ${theme.mobile.sizes.buttonHeight};
  `,
  large: css`
    width: ${theme.mobile.sizes.buttonWidth};
    height: ${theme.mobile.sizes.buttonHeight};

    ${theme.media.tablet} {
      width: ${theme.tablet.sizes.formButtonWidth};
      height: ${theme.tablet.sizes.formButtonHeight};
      font-size: ${theme.tablet.fontSizes.formText};
    }

    ${theme.media.desktop} {
      width: ${theme.desktop.sizes.buttonWidth};
      height: ${theme.desktop.sizes.buttonHeight};
      font-size: ${theme.desktop.fontSizes.formText};
    }
  `,
  icon: css`
    width: ${theme.mobile.sizes.likeButtonWidth};
    height: ${theme.mobile.sizes.likeButtonHeight};
    flex-shrink: 0;
  `,
  iconLarge: css`
    width: ${theme.mobile.sizes.likeButtonWidth};
    height: ${theme.mobile.sizes.likeButtonHeight};
    flex-shrink: 0;

    ${theme.media.tablet} {
      width: ${theme.tablet.sizes.formButtonHeight};
      height: ${theme.tablet.sizes.formButtonHeight};
      font-size: ${theme.tablet.fontSizes.formText};
    }

    ${theme.media.desktop} {
      width: ${theme.desktop.sizes.likeButtonWidth};
      height: ${theme.desktop.sizes.likeButtonHeight};
      font-size: inherit;
    }
  `,
  square: css`
    width: ${theme.mobile.sizes.pageSquareSize};
    height: ${theme.mobile.sizes.pageSquareSize};

    ${theme.media.tablet} {
      width: ${theme.tablet.sizes.pageSquareSize};
      height: ${theme.tablet.sizes.pageSquareSize};
    }

    ${theme.media.desktop} {
      width: ${theme.desktop.sizes.pageSquareSize};
      height: ${theme.desktop.sizes.pageSquareSize};
    }
  `,
};

const hoverColors = {
  default: theme.colors.orange,
  success: theme.colors.success,
  alert: theme.colors.alert,
};

export const buttonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.mobile.fontSizes.formText};
  color: ${theme.colors.black};
  background-color: ${({ $isActive, $variant }) =>
    $isActive ? hoverColors[$variant] : theme.colors.rosyBeige};
  border: ${theme.borders.width} solid ${theme.colors.buttonBorder};
  border-radius: ${theme.radii.button};
  transition:
    background-color 0.2s ease-out,
    color 0.2s ease-out;

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.formText};
  }

  ${({ $size }) => sizeStyles[$size]}

  ${theme.media.hover} {
    &:hover:not(:disabled) {
      color: ${theme.colors.black};
      background-color: ${({ $variant }) => hoverColors[$variant]};
    }
  }

  &:focus-visible {
    outline: ${theme.outlines.width} solid
      ${({ $variant }) => hoverColors[$variant]};
    outline-offset: ${theme.outlines.width};
  }

  &:disabled {
    color: ${theme.colors.disabledText};
    background-color: ${theme.colors.disabled};
    cursor: not-allowed;
  }
`;
