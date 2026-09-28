import { HeroSection } from "../components/sections/HeroSection";
import { RandomPostersSection } from "../components/sections/RandomPostersSection";
import { PageTitle } from "../components/ui/PageTitle";
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

// Global style so it can reach <body>; applies only while HomePage is mounted
const ReelBackground = createGlobalStyle`
  ${reelBackground}
`;

export const HomePage = () => {
  return (
    <>
      <PageTitle title="Forside" />
      <ReelBackground />
      <HeroSection />
      <RandomPostersSection />
    </>
  );
};
