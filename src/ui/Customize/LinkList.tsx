import styled from "styled-components";
import GetYouStarted from "./GetYouStarted";

const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
import MainButton from "../MainButton";

export default function LinkList() {
  return (
    <StyledLinkList>
      <GetYouStarted />
      <MainButton />
    </StyledLinkList>
  );
}
