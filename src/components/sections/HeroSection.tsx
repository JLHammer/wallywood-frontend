import styled from "styled-components";
import { theme } from "../../styles/theme";
import { HeroImage } from "../ui/HeroImage";

const HeroSectionStyled = styled.section`
  padding: 0;
  height: ${theme.mobile.sizes.heroHeight};

  ${theme.media.tablet} {
    height: ${theme.tablet.sizes.heroHeight};
  }
`;

export const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <HeroImage />
    </HeroSectionStyled>
  );
};
