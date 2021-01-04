import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;700&display=swap');

  body,
  html {
    margin: 0;
    padding: 0;
  }

  p,
  a,
  span,
  label,
  figure,
  section,
  div,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button {
    font-family: ${theme.fonts.Sans};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
