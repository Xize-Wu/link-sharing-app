import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styled from "styled-components";

import NavBar from "./NavBar";
import Customize from "../ui/Customize";
import Profile from "../ui/Profile";

const StyledDashBoard = styled.div`
  width: 95%;
`
export default function Dashboard() {
  const toggleValue = useSelector((state: RootState) => state.toggle.value);

  return (
    <StyledDashBoard>
      {toggleValue !== "preview" && <NavBar />}
      {toggleValue === "customize" && <Customize />}
      {toggleValue === "profile" && <Profile />}
    </StyledDashBoard>
  );
}
