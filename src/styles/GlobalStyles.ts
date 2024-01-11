import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #FAFAFA;
    --layout-background-color: #FFFFFF;
    --primary-color:#633CFF;
    --header-text-color: #333333;
  }

  @font-face {
    font-family:'InstrumentSans',
    src: url('../src/assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf')format('truetype');
    font-weight: normal;
    font-style: normal

  }

  body{
    background-color: var(--primary-background-color);
    font-family: 'InstrumentSans', sans-serif;
  }
`;
export default GlobalStyle
