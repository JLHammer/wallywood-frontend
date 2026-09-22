import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Button } from "../button/Button";

export const FormButtonGroup = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.m};

  ${theme.media.tablet} {
    gap: ${theme.tablet.spacing.l};

    ${Button} {
      width: ${theme.tablet.sizes.formButtonWidth};
      height: ${theme.tablet.sizes.formButtonHeight};
      font-size: ${theme.tablet.fontSizes.formText};
    }
  }

  ${theme.media.desktop} {
    justify-content: flex-start;
    gap: ${theme.desktop.spacing.m};

    ${Button} {
      width: ${theme.desktop.sizes.buttonWidth};
      height: ${theme.desktop.sizes.buttonHeight};
      font-size: ${theme.desktop.fontSizes.formText};
    }
  }
`;
