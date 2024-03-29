import styled from "styled-components";
import { useState } from "react";

import Guide from "./Customize/Guide";
import { SharedDashboardStyles } from "../styles/SharedStyles";
import MyLinks from "./Customize/MyLinks";

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
      <MyLinks count={count}/>
    </StyledCustomize>
  );
}
