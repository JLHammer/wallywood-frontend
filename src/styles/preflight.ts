import { css } from "styled-components";

const headings = "h1, h2, h3, h4, h5, h6";

export const preflight = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  ${headings} {
    font-size: inherit;
    font-weight: inherit;
  }

  b,
  strong {
    font-weight: bolder;
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

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  ${headings},
  p {
    margin: 0;
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
  }

  button {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg {
    display: block;
    vertical-align: middle;
  }

  svg {
    overflow: visible;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }
`;
