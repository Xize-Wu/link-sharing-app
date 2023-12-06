import { styled, css } from 'styled-components';

interface LoginCreateButtonProps {
  bgColor: string;
  children:React.ReactNode;
  onClick: () => void;
}

interface StyledButtonProps {
  $bgColor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => css`background-color: ${props.$bgColor}`};
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

function LoginCreateButton({ children, bgColor, onClick }: LoginCreateButtonProps) {
  return <StyledButton $bgColor={bgColor} onClick={onClick}>
    {children}
  </StyledButton>
  //return <StyledButton  bgColor={bgColor} onClick={onClick}>{buttonText} </StyledButton>;
}

export default LoginCreateButton;

// interface LoginCreateButtonProps {
//   bgColor: string;
//   buttonText: string;
//   onClick: () => void;
// }

// interface StyledButtonProps {
//   $bgColor: string;
// }

// const StyledButton = styled.button<StyledButtonProps>`
//   ${(props) => css`
//     background-color: ${props.$bgColor};
//   `}

//   color: white;
//   width: 15em;
//   height: 2.5em;
//   border: none;
//   // padding-left: 10px;
//   // padding-right: 10px;
//   border-radius: 6px;
//   cursor: pointer;
//   font-family: "Instrument Sans", sans-serif;
// `;

// function LoginCreateButton({
//   bgColor,
//   buttonText,
//   onClick,
// }: LoginCreateButtonProps) {
//   return (
//     <StyledButton $bgColor={bgColor} onClick={onClick}>
//       {buttonText}
//     </StyledButton>
//   );
// }

// export default LoginCreateButton;