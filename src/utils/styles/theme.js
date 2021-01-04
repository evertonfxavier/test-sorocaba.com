const RELATIVE_UNIT_BASE = 16;
const MAX_WIDTH = "1255px";
const MOBILE_HEADER_HEIGHT = "93px";

const breakpoints = {
  tablet: 960,
  phone: 768,
};

const generateBreakpoint = (width, cssMarkup) => `
  @media (max-width: ${width / RELATIVE_UNIT_BASE}em) {
    ${cssMarkup};
  }
`;

const theme = {
  baseline: RELATIVE_UNIT_BASE,
  setContainer: () => `
    max-width: ${MAX_WIDTH};
    width: 100%;
    margin-left:auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
  `,
  maxWidth: MAX_WIDTH,
  mobileHeaderHeight: MOBILE_HEADER_HEIGHT,
  fonts: {
    Sans: "Open Sans, sans-serif",
    Montserrat: "Montserrat, sans-serif",
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    primary: {
      light: "#7DEDE2",
      normal: "#2AC496",
      mid: "#63C7A9",
      dark: "#58B790",
    },
    secondary: {
      light: "#0000004D",
      normal: "#707070",
      dark: "#363636",
    },
    smoth: {
      light: "#FFFFFF63",
      normal: "#00000029",
      dark: "#F0F0F2",
    },
    success: "#28a745",
    danger: "#F04134",
  },
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args);
    return acc;
  }, {}),
};

export default theme;
