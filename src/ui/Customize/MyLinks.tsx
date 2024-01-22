import styled from "styled-components";
import { useSelector } from "react-redux";
import { getLinks } from "../../redux/authSlice";

import { LinkInterface } from "../../redux/types";

import GetYouStarted from "./GetYouStarted";
import MainButton from "../MainButton";
import LinkComponent from "./LinkComponent";
import { Link } from "react-router-dom";


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

const StyledLinkArr= styled.div`
  width: 100%;
`
export default function MyLinks() {
  const links = useSelector(getLinks);

  console.log(links);

  function handleSaveLinks() {
    console.log("save links");
    console.log(links);
  }



  return(
    <StyledMyLinks>
      <StyledLinkArr>
        {links.length === 0? (
          <GetYouStarted/>
        ): (
          links.map(
            (link, index) =>{
              return(
                <LinkComponent
                key = {index}
                index={link.index}
                platform={link.platform}
                address={link.address}
                />
              )
            }
          )
        )}
      </StyledLinkArr>
      <button onClick={handleSaveLinks}>Save Link</button>
    </StyledMyLinks>
  );
}
