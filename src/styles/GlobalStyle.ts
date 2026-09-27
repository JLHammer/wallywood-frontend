import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  html {
    background-color: ${theme.colors.bordeaux};
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
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
    line-height: ${theme.mobile.lineHeights.body};

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

  h1,
  h2,
  h3 {
    margin: 0;
    text-wrap: balance;
    line-height: normal;
  }

  h1 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.mobile.fontSizes.h1};
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
    color: ${theme.colors.orange};

    ${theme.media.tablet} {
      font-size: ${theme.tablet.fontSizes.h2};
    }

    ${theme.media.desktop} {
      font-size: ${theme.desktop.fontSizes.h2};
    }
  }

  h3 {
    font-size: ${theme.mobile.fontSizes.h3};

    ${theme.media.tablet} {
      font-size: ${theme.tablet.fontSizes.h3};
    }

    ${theme.media.desktop} {
      font-size: ${theme.desktop.fontSizes.h3};
    }
  }

  p {
    margin: 0;
    text-wrap: pretty;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.colors.orange};
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  form {
    padding: 0 ${theme.mobile.spacing.l};

    ${theme.media.tablet} {
      padding: 0;
    }
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: ${theme.colors.placeholder};
  }

  img,
  svg {
    display: block;
  }

  svg {
    overflow: visible;
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
`;
