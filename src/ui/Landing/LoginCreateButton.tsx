import { styled, css } from 'styled-components';

interface LoginCreateButtonProps {
  bgColor: string;
  color: string;
  children:React.ReactNode;
  onClick: () => void;
}

interface StyledButtonProps {
  $bgColor: string;
  $color: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => css`background-color: ${props.$bgColor};
  color:${props.$color}`};
  width: 15em;
  height: 2.5em;
  border: none;
  // padding-left: 10px;
  // padding-right: 10px;
  border-radius: 6px; 
  cursor: pointer; 
  font-family: 'Instrument Sans', sans-serif;
`;

function LoginCreateButton({ children, bgColor, color, onClick }: LoginCreateButtonProps) {
  return <StyledButton $bgColor={bgColor} $color={color} onClick={onClick}>
    {children}
  </StyledButton>
}

export default LoginCreateButton;