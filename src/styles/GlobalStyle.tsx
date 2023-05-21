import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-family);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  };

  :root {
    --font-family: 'Josefin Sans', sans-serif;
  }
`

export default GlobalStyle;