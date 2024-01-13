import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-purple:#633CFF;
    --purple: #BEADFF;
    --light-purple: #EFEBFF;
    --black: #333333;
    --dark-grey: #737373;
    --grey: #D9D9D9;
    --light-grey: #FAFAFA;
    --white: #FFFFFF;
    --red: #FF3939;
  }

  @font-face {
    font-family:'InstrumentSans',
    src: url('../src/assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf')format('truetype');
    font-weight: normal;
    font-style: normal
  }

  body{
    background-color: var(--light-grey);
    font-family: 'InstrumentSans', sans-serif;
  }
`;
export default GlobalStyle
