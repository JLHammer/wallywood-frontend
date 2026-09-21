import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";
import { preflight } from "./preflight";

const globalStyles = css`
  ${preflight}

  html {
    background-color: ${theme.colors.bordeaux};
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    ::before,
    ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    background-color: ${theme.colors.white};
    max-width: ${theme.mobile.layout.bodyWidth};
    width: 100%;
    min-height: 100dvh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: ${theme.fonts.body};
    font-size: ${theme.mobile.fontSizes.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.mobile.lineHeights.body};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      line-height: ${theme.desktop.lineHeights.body};
    }
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.mobile.spacing.m};
    padding: ${theme.mobile.spacing.m} ${theme.mobile.spacing.xxs} 0;
  }

  form {
    padding: 0 ${theme.mobile.spacing.l};

    ${theme.media.tablet} {
      padding: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
    line-height: normal;
  }

  h1 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.mobile.fontSizes.h1};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.orange};

    ${theme.media.tablet} {
      font-size: ${theme.tablet.fontSizes.h1};
    }

    ${theme.media.desktop} {
      font-size: ${theme.desktop.fontSizes.h1};
    }
  }

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.mobile.fontSizes.h2};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.orange};

    ${theme.media.tablet} {
      font-size: ${theme.tablet.fontSizes.h2};
    }

    ${theme.media.desktop} {
      font-size: ${theme.desktop.fontSizes.h2};
    }
  }

  h3 {
    font-family: ${theme.fonts.body};
    font-size: ${theme.mobile.fontSizes.h3};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.black};

    ${theme.media.tablet} {
      font-size: ${theme.tablet.fontSizes.h3};
    }

    ${theme.media.desktop} {
      font-size: ${theme.desktop.fontSizes.h3};
    }
  }

  p {
    text-wrap: pretty;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.colors.orange};
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: ${theme.colors.placeholder};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;
