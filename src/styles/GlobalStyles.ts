import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #FAFAFA;
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
// // later in your app's render method
// <React.Fragment>
//   <Navigation />
//   <OtherImportantTopLevelComponentStuff />
//   <GlobalStyle />
// </React.Fragment>
