import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #FAFAFA;
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
/*
const colorsVar: { [key: string]: string } = {
  primary: "#633CFF",
  secondary: "#BEADFF",
  disabled: "#EFEBFF",
  parent_component_background: "#FAFAFA",
  header: "333333",
  error: "#FF3939",
  notes: "#D9D9D9",
  child_component_background: "#FFFFFF",
};
*/