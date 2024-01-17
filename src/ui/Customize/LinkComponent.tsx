import styled from "styled-components";

import { LinkInterface } from "../../contexts/types";
const StyledLinkComponent = styled.div``;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

interface LinkProps {
  index: number;
  platform: string | undefined; 
  address: string | undefined;  
  onChange: (field: Partial<LinkInterface>) => void;
  onRemove: () => void;
}

export default function LinkComponent(props: LinkProps) {
  const { index, platform, address, onChange, onRemove } = props;
  return (
    <StyledLinkComponent>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="6"
        fill="none"
        viewBox="0 0 12 6"
      >
        <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
      </svg>
      Link #{index}
      <div onClick={() => onRemove()}>remove</div>
      <form>
        <div>
          Platform
          <StyledInput
            type="text"
            value={platform}
            onChange={(e) =>
              onChange({ index: index, platform: e.target.value })
            }
          />
        </div>
        <div>
          Link
          <StyledInput
            type="text"
            value={address}
            onChange={(e) =>
              onChange({ index: index, address: e.target.value })
            }
          />
        </div>
      </form>
    </StyledLinkComponent>
  );
}
