import { styled, css } from 'styled-components';
interface MainButtonProps {
  bgColor: string;
  color: string;
  border: string;
  children:React.ReactNode;
  onClick: () => void;
}

interface StyledButtonProps {
  $bgColor: string;
  $color: string;
  $border: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => css`background-color: ${props.$bgColor};
  color:${props.$color};
  border: ${props.$border};`};
  width: 18rem;
  height: 3.2rem;
  font-size: 16px;
  font-weight: bold;  
  border-radius: 6px; 
  cursor: pointer; 
  font-family: 'Instrument Sans', sans-serif;
`;

function MainButton({ children, bgColor, color, border, onClick }: MainButtonProps) {
  return <StyledButton $bgColor={bgColor} $color={color} $border={border} onClick={onClick}>
    {children}
  </StyledButton>
}

export default MainButton;