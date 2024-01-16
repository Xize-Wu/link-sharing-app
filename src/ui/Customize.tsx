import styled from "styled-components";
import { useState } from "react";

import Guide from "./Customize/Guide";
import LinkList from "./Customize/LinkList";
import { SharedDashboardStyles } from "../styles/SharedStyles";

const StyledCustomize = styled.div`
  ${SharedDashboardStyles}
`;

export default function Customize() {
  const [count, setCount] = useState<number>(0);

  function addNewLink (){
    setCount(prev => prev + 1);
  }

  return (
    <StyledCustomize>
      <Guide count={count} addNewLink={addNewLink}/>
      <LinkList/>
    </StyledCustomize>
  );
}
