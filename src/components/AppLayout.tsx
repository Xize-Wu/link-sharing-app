import Login from "./Login";
import CreateAccount from "./CreateAccount";
import { styled, css } from "styled-components";
import { DatabaseProvider, useDatabase } from "../contexts/DatabaseContext";
const StyledLayout = styled.div`
  background-color: beige;
`;
function AppLayout() {
  return (
    <StyledLayout>
      <header></header>
      <main>
        <Login />
        <CreateAccount />
      </main>
      <footer>This is a footer</footer>
    </StyledLayout>
  );
}

export default AppLayout;
