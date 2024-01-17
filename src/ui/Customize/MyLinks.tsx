import styled from "styled-components";

import { useDatabase } from "../../contexts/DatabaseContext";

import GetYouStarted from "./GetYouStarted";
import EditLinks from "./EditLinks";
import MainButton from "../MainButton";


interface MyLinksProps {
  count: number;
}

const StyledMyLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--light-grey)
`;

export default function MyLinks(props:MyLinksProps) {
  const { loginStatus, linkArray } = useDatabase();
  const {count} = props
  return(
    <StyledMyLinks>
      {linkArray.length === 0 && count === 0 ? <GetYouStarted />:<EditLinks count = {count}/>}
      <MainButton />
      </StyledMyLinks>

  );
}
