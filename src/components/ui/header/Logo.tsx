import styled from "styled-components";
import { theme } from "../../../styles/theme";

const LogoStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoText = styled.span`
  text-transform: uppercase;
  color: ${theme.colors.orange};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.mobile.fontSizes.h1};
  font-weight: ${theme.fontWeights.fat};

  ${theme.media.tablet} {
    font-size: ${theme.tablet.fontSizes.h1};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.h1};
  }
`;

export const Logo = () => {
  return (
    <LogoStyled href="/">
      <LogoText>Wallywood</LogoText>
    </LogoStyled>
  );
};
