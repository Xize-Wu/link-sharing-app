import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #D9D9D9;
  }

  body{
    background-color: var(--primary-background-color);
  }
`;
export default GlobalStyle
// // later in your app's render method
// <React.Fragment>
//   <Navigation />
//   <OtherImportantTopLevelComponentStuff />
//   <GlobalStyle />
// </React.Fragment>
