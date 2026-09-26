import { MainLayout } from "../components/layout/MainLayout";
import { HeroSection } from "../components/sections/HeroSection";
import { RandomPostersSection } from "../components/sections/RandomPostersSection";
import { createGlobalStyle, css } from "styled-components";
import reel from "../assets/images/reel.jpg";
import { theme } from "../styles/theme";

const reelBackground = css`
  body {
    background: ${theme.colors.white} url(${reel}) no-repeat;
    background-position: center bottom;
    background-size: ${theme.mobile.sizes.reelBackgroundSize};

    ${theme.media.tablet} {
      background-position: center bottom;
      background-size: ${theme.tablet.sizes.reelBackgroundSize};
    }

    ${theme.media.desktop} {
      background-position: center bottom;
      background-size: ${theme.desktop.sizes.reelBackgroundSize};
    }
  }
`;

const ReelBackground = createGlobalStyle`
  ${reelBackground}
`;

export const HomePage = () => {
  return (
    <MainLayout pageTitle="Forside">
      <ReelBackground />
      <HeroSection />
      <RandomPostersSection />
    </MainLayout>
  );
};
