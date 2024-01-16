import styled from "styled-components";
import GetYouStarted from "./GetYouStarted";
import { useDatabase } from "../../contexts/DatabaseContext";

const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
import MainButton from "../MainButton";

export default function LinkList() {
  const { loginStatus, linkArray } = useDatabase();
  return (
    <StyledLinkList>
      {linkArray.length === 0? <GetYouStarted />:<>Test</>}
      <MainButton />
    </StyledLinkList>
  );
}
