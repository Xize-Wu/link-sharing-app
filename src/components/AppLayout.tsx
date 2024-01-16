import { styled } from "styled-components";

import Landing from "./Landing";
import Dashboard from "./Dashboard";
import { useDatabase } from "../contexts/DatabaseContext";

const StyledLayout = styled.main`
  width: 100%;
`;

function AppLayout() {
  const { loginStatus } = useDatabase();

  return (
    <StyledLayout>{loginStatus ? <Dashboard /> : <Landing />}</StyledLayout>
  );
}

export default AppLayout;
