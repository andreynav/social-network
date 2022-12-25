import { createGlobalStyle } from 'styled-components'

import MontserratLight from '../fonts/Montserrat-Light.ttf'
import MontserratMedium from '../fonts/Montserrat-Medium.ttf'
import MontserratRegular from '../fonts/Montserrat-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-gold: #ffc300;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
    url(${MontserratLight}) format("truetype"),
    url(${MontserratRegular}) format("truetype"),
    url(${MontserratMedium}) format("truetype");
  }
  
  html, body {
    margin: 0;
    padding: 0;
    line-height: 1.15;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    display: block;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }
  
  a {
    background-color: transparent;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  code,
  kbd,
  samp {
    font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
    font-size: 1em;
  }
  
  small {
    font-size: 80%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    border-style: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
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
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  [hidden] {
    display: none;
  }

  *, *::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
