import styled from 'styled-components';

interface LoginCreateButtonProps {
  bgColor?: string;
  buttonText?: string; // Define buttonText prop
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

function LoginCreateButton({ bgColor, buttonText }: LoginCreateButtonProps) {
  return <StyledButton bgColor={bgColor}>{buttonText}</StyledButton>;
}

export default LoginCreateButton;

