import styled from 'styled-components';
import { useDatabase } from "../contexts/DatabaseContext";

interface LoginCreateButtonProps {
  bgColor: string;
  buttonText: string;
  onClick: (item: {})=>boolean;
}

const StyledButton = styled.button<LoginCreateButtonProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  width: 15em;
  height: 2.5em;
  border: none;
  // padding-left: 10px;
  // padding-right: 10px;
  border-radius: 6px; 
  cursor: pointer; 
  font-family: 'Instrument Sans', sans-serif;
`;

function LoginCreateButton({ bgColor, buttonText, onClick}: LoginCreateButtonProps) {
  return <StyledButton  bgColor={bgColor} onClick={onClick}>{buttonText} </StyledButton>;
}

export default LoginCreateButton;

