const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const mobile = {
  fontSizes: {
    body: "1.05rem",
    footerText: "1rem",
    footerLogo: "1.75rem",
    nav: "1rem",
    h1: "2.2rem",
    h2: "1.375rem",
    h3: "1.125rem",
    cardTitle: "1.5rem",
    formText: "1rem",
    badge: "0.75rem",
  },

  lineHeights: {
    body: "1.5",
  },

  spacing: {
    xxxs: "0.1875rem",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "0.625rem",
    m: "0.875rem",
    l: "1.25rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3.5rem",
  },

  layout: {
    bodyWidth: "min(100%, 67.5rem)",
    contentWidth: "min(100%, 62.5rem)",
    sidebarWidth: "10.5rem",
  },

  sizes: {
    headerHeight: "3.9375rem",
    footerHeight: "4.4375rem",
    heroHeight: "5rem",
    buttonWidth: "7rem",
    buttonHeight: "1.9375rem",
    likeButtonWidth: "2rem",
    likeButtonHeight: "1.9375rem",
    inputWidth: "min(100%, 22.8125rem)",
    inputHeight: "1.8125rem",
    textareaHeight: "11rem",
    selectWidth: "13.3125rem",
    selectHeight: "2rem",
    selectChevronSize: "1.25rem",
    frontpageCardWidth: "min(100%, 30.6875rem)",
    frontpageCardHeight: "13rem",
    frontpageCardImageWidth: "100%",
    listCardWidth: "14.125rem",
    listCardImageHeight: "19.25rem",
    detailsImageWidth: "min(100%, 18.3125rem)",
    detailsImageHeight: "24.9375rem",
    detailsTextWidth: "min(100%, 28.875rem)",
    aboutTextWidth: "min(100%, 39.1875rem)",
    aboutImageSize: "20.9375rem",
    socialIcon: "3.5rem",
    reelBackgroundSize: "350% auto",
    cartModalWidth: "85%",
    cartImageWidth: "4.5rem",
    closeIconSize: "1.75rem",
    cartBadgeSize: "1.125rem",
    pageSquareSize: "2rem",
  },
};

const tablet = {
  ...mobile,
  fontSizes: {
    ...mobile.fontSizes,
    footerText: "1.125rem",
    footerLogo: "2rem",
    h1: "2.5rem",
    h2: "1.75rem",
    h3: "1.25rem",
    formText: "1.125rem",
    listCardTitle: "1.75rem",
    listCardPrice: "1.25rem",
  },
  sizes: {
    ...mobile.sizes,
    inputWidth: "min(100%, 36rem)",
    inputHeight: "2.75rem",
    selectHeight: "2.75rem",
    selectChevronSize: "1.5rem",
    listCardImageWidth: "min(100%, 20rem)",
    formButtonWidth: "9.5rem",
    formButtonHeight: "2.75rem",
    textareaHeight: "16rem",
    socialIcon: "4rem",
    aboutImageSize: "26rem",
    headerIconSize: "1.625rem",
    heroHeight: "16.75rem",
    frontpageCardWidth: "min(100%, 40rem)",
    frontpageCardHeight: "18rem",
    frontpageCardImageWidth: "12.5rem",
    reelBackgroundSize: "200% auto",
    cartModalWidth: "70%",
    cartImageWidth: "6rem",
    closeIconSize: "2.25rem",
    pageSquareSize: "2.75rem",
  },
  lineClamps: {
    frontpageCardText: 5,
  },
};

const desktop = {
  ...tablet,
  fontSizes: {
    ...tablet.fontSizes,
    footerText: "0.875rem",
    footerLogo: "1rem",
    h1: "2.125rem",
    h2: "1.75rem",
    h3: "1.125rem",
    formText: "0.875rem",
    content: "0.875rem",
    contentTitle: "1.25rem",
    listCardTitle: "0.875rem",
    listCardPrice: "0.875rem",
    frontpageCardTitle: "1.25rem",
    frontpageCardText: "0.875rem",
  },
  lineHeights: {
    ...tablet.lineHeights,
    body: "normal",
  },
  sizes: {
    ...tablet.sizes,
    footerTopOffset: "3.75rem",
    footerColumnWidth: "15.75rem",
    socialIcon: "1.875rem",
    aboutImageSize: "20.9375rem",
    detailsImageOffset: "3rem",
    sidebarMinHeight: "54.5625rem",
    reelBackgroundSize: "100% auto",
    frontpageCardWidth: "min(100%, 30.6875rem)",
    frontpageCardHeight: "13rem",
    frontpageCardImageWidth: "8.75rem",
    frontpageCardRowGap: "2.6875rem",
    inputWidth: "min(100%, 22.8125rem)",
    inputHeight: "1.8125rem",
    selectWidth: "13.3125rem",
    selectHeight: "2rem",
    selectChevronSize: "1.25rem",
    textareaHeight: "11rem",
    pageSquareSize: "1.9375rem",
    cartImageWidth: "4.5rem",
    closeIconSize: "1.75rem",
  },
  lineClamps: {
    frontpageCardText: 4,
  },
};

export const theme = {
  colors: {
    bordeaux: "#5c1f06",
    orange: "#d97852",
    rosyBeige: "#d1b3a7",
    frostyBlue: "#4088ad",
    success: "#7a9e5f",
    alert: "#d9534a",
    disabled: "#cfcac7",
    disabledText: "#7a716d",

    white: "#ffffff",
    black: "#000000",
    buttonBorder: "#524641",
    placeholder: "#bbbbbb",
    inputBackground: "#f8f6f5",
    socialIcon: "#c4c4c4",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },

  fonts: {
    heading: "'Titillium Web', sans-serif",
    body: "'Open Sans', sans-serif",
    select: "'Poppins', sans-serif",
  },

  fontWeights: {
    regular: 400,
    bold: 700,
    fat: 900,
  },

  mobile,
  tablet,
  desktop,

  radii: {
    button: "3px",
    input: "2px",
    round: "999px",
  },

  borders: {
    width: "1px",
  },

  outlines: {
    width: "3px",
  },

  underlines: {
    offset: "0.2rem",
    thickness: "0.08rem",
  },

  shadows: {
    inputInset: "inset 0 1px 4px rgba(0, 0, 0, 0.06)",
  },

  frame: {
    borderTop: "#2f2d2d",
    borderSide: "#434040",
    borderBottom: "#4f4c4c",
    matLight: "#e5e4df",
    matDark: "#cdcdc6",
    edgeTop: "#bbbab4",
    edgeSide: "#c7c7bf",
    width: "0.5rem",
    matWidth: "1rem",
    matWidthSmall: "0.5rem",
    glareTop: "-23%",
    glareTopSquare: "-47%",
    edgeWidth: "2px",
    shadow:
      "inset 0 2px 5px rgba(0, 0, 0, 0.6), 0 5px 2px rgba(0, 0, 0, 0.1), 0 8px 14px -4px rgba(0, 0, 0, 0.8)",
    edgeShadow:
      "0 -1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px 1px rgba(255, 255, 255, 0.7)",
    glare: "rgba(255, 255, 255, 0.2)",
  },

  zIndices: {
    header: 5,
    modal: 10,
  },

  breakpoints,

  media: {
    tablet: `@media (min-width: ${breakpoints.tablet})`,
    desktop: `@media (min-width: ${breakpoints.desktop})`,
    hover: `@media (hover: hover)`,
  },
};
