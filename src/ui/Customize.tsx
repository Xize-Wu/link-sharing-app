// Customize.tsx
import styled from "styled-components";

import Guide from "./Customize/Guide";
import { SharedDashboardStyles } from "../styles/SharedStyles";

const StyledCustomize = styled.div`
  ${SharedDashboardStyles}
`;

export default function Customize() {
  return (
    <StyledCustomize>
      <Guide />
    </StyledCustomize>
  );
}
