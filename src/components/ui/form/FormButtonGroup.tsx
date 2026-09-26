import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormButtonGroup = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.m};

  ${theme.media.tablet} {
    gap: ${theme.tablet.spacing.l};
  }

  ${theme.media.desktop} {
    justify-content: flex-start;
    gap: ${theme.desktop.spacing.m};
  }
`;
