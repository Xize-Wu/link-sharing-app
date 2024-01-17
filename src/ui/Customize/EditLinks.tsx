import styled from "styled-components";
import { useDatabase } from "../../contexts/DatabaseContext";

import Link from "./Link";
const StyledEditLinks = styled.div``;

interface EditLinksProps {
  count: number;
}

export default function EditLinks(props: EditLinksProps) {
  const { linkArray } = useDatabase();

  return (
    <StyledEditLinks>
      <StyledEditLinks>
        {linkArray.map((item) => (
          <Link
            index={item.index}
            platform={item.platform}
            address={item.address}
          />
        ))}
      </StyledEditLinks>
    </StyledEditLinks>
  );
}
