import styled from "styled-components";

const StyledLink = styled.div``;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

interface LinkProps {
  index: number;
  platform: string;
  address: string;
}

export default function Link(props: LinkProps) {
  const { index, platform, address } = props;
  return (
    <StyledLink>
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
      <form>
        <StyledInput type="text" value={platform}/>
        <StyledInput type="text" value={address}/>

      </form>
    </StyledLink>
  );
}
