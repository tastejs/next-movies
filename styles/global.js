
import css from 'styled-jsx/css';

import theme from './theme';
import CLASS_NAMES from 'utils/constants/class-names';

export default css.global`
  :root {
    color-scheme: light dark;
    --duration: 0.5s;
    --timing: ease;
    --palette-background-backdrop: rgba(0, 0, 0, 0.5);
    --palette-common-white: #fff;
    --palette-common-black: #000;
    --palette-custom-lightBlue: lightblue;
    --palette-custom-tmdbLightBlue: #01b4e4;
  }

  body {
    color: var(--palette-text-primary);
    background-color: var(--palette-background-default);
    /* MEMO: inspired by https://web.dev/prefers-color-scheme/#smooth-transitions-between-modes */
    transition: color var(--duration) var(--timing), background-color var(--duration) var(--timing);
  }

  body.${CLASS_NAMES.LIGHT} {
    /* MEMO: inspired by https://web.dev/prefers-color-scheme/#avoid-pure-white */
    --palette-background-default: #fafafa;
    --palette-text-primary: rgba(0, 0, 0, 0.87);
    --palette-text-secondary: rgba(0, 0, 0, 0.54);
    --palette-text-disabled: rgba(0, 0, 0, 0.38);
    --palette-divider: rgba(0, 0, 0, 0.12);

    --palette-action-active: rgba(0, 0, 0, 0.54);
    --palette-action-hover: rgba(0, 0, 0, 0.04);
    --palette-action-hover-opacity: 0.04;
    --palette-action-selected: rgba(0, 0, 0, 0.08);
    --palette-action-disabled: rgba(0, 0, 0, 0.26);
    --palette-action-disabled-background: rgba(0, 0, 0, 0.12);

    --palette-background-paper: #fff;

    --palette-primary-main: #14b8a2;
    --palette-primary-main-rgb: 20, 184, 162;
    --palette-primary-dark: #0e8071;
    --palette-primary-light: #43c6b4;
    /* --palette-primary-contrast-text: #fff; */ /* at color schema */
    --palette-primary-contrast-text: rgba(0, 0, 0, 0.87); /* at MUI */

    --palette-secondary-main: #b80040;
    --palette-secondary-main-rgb: 184, 0, 64;
    --palette-secondary-dark: #80002c;
    --palette-secondary-light: #c63366;
    --palette-secondary-contrast-text: #fff; /* at MUI */

    --palette-warning-main: #b5b800;
    --palette-warning-dark: #7e8000;
    --palette-warning-light: #c3c633;
    --palette-warning-contrast-text: rgba(0, 0, 0, 0.87); /* at MUI */

    --background-blend-gradient: linear-gradient(rgba(255, 255, 255, 0) 68%, rgb(255, 255, 255) 100%);
  }

  body.${CLASS_NAMES.DARK} {
    /* MEMO: drop image filter in the dark mode for now */
    --image-filter: grayscale(0%);

    --palette-background-default: #303030;
    --palette-text-primary: #fff;
    --palette-text-secondary: rgba(255, 255, 255, 0.7);
    --palette-text-disabled: rgba(255, 255, 255, 0.5);
    --palette-divider: rgba(255, 255, 255, 0.12);

    --palette-action-active: #fff;
    --palette-action-hover: rgba(255, 255, 255, 0.08);
    --palette-action-hover-opacity: 0.08;
    --palette-action-selected: rgba(255, 255, 255, 0.16);
    --palette-action-disabled: rgba(255, 255, 255, 0.3);
    --palette-action-disabled-background: rgba(255, 255, 255, 0.12);

    --palette-background-paper: #424242;

    --palette-primary-main: #41ead4;
    --palette-primary-main-rgb: 65, 234, 212;
    --palette-primary-dark: #2da394;
    --palette-primary-light: #67eedc;
    /* --palette-primary-contrast-text: rgba(0, 0, 0, 0.87); */ /* at color schema */
    --palette-primary-contrast-text: rgba(0, 0, 0, 0.87); /* at MUI */

    --palette-secondary-main: #ff206e;
    --palette-secondary-main-rgb: 255, 32, 110;
    --palette-secondary-dark: #b2164d;
    --palette-secondary-light: #ff4c8b;
    --palette-secondary-contrast-text: #fff; /* at MUI */

    --palette-warning-main: #fbff12;
    --palette-warning-dark: #afb20c;
    --palette-warning-light: #fbff41;
    --palette-warning-contrast-text: rgba(0, 0, 0, 0.87); /* at MUI */

    --background-blend-gradient: linear-gradient(rgba(255, 255, 255, 0) 68%, rgb(48, 48, 48) 100%);
  }

  /* MEMO: inspired by https://web.dev/prefers-color-scheme/#re-colorize-and-darken-photographic-images */
  body.dark img:not([src*=".svg"]) {
    filter: var(--image-filter);
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
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
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
    font-weight: ${theme.typography.fontWeightRegular};
    line-height: 1.6;
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
  }

  .${CLASS_NAMES.VISIBLE} {
    visibility: visible;
  }

  .${CLASS_NAMES.INVISIBLE} {
    visibility: hidden;
  }
`;
