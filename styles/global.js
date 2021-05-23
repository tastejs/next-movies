
import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  :root {
    --palette-primary-main: rgb(${theme.palette.primary.main.rgb});
    --palette-primary-dark: rgb(${theme.palette.primary.dark.rgb});
    --palette-primary-light: rgb(${theme.palette.primary.light.rgb});
    --palette-primary-lighter: rgb(${theme.palette.primary.lighter.rgb});
    --palette-primary-main-rgb: ${theme.palette.primary.main.rgb};
    --palette-primary-dark-rgb: ${theme.palette.primary.dark.rgb};
    --palette-primary-light-rgb: ${theme.palette.primary.light.rgb};
    --palette-background-backdrop: rgba(0, 0, 0, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    box-sizing: border-box;
  }
  @media ${theme.mediaQueries.largest} {
    html {
      font-size: 57.5%;
    }
  }
  @media ${theme.mediaQueries.large} {
    html {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
