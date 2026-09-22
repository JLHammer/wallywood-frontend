import { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const buttonStyles = css`
  width: ${theme.mobile.sizes.buttonWidth};
  height: ${theme.mobile.sizes.buttonHeight};
  font-size: ${theme.mobile.fontSizes.formText};
  background-color: ${theme.colors.buttonSkin};
  border: ${theme.borders.width} solid ${theme.colors.buttonBorder};
  border-radius: ${theme.radii.button};
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${theme.colors.orange};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.formText};
  }
`;

export const largeButtonStyles = css`
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
`;
