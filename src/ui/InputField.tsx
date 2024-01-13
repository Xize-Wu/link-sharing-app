import { styled } from "styled-components";
import InputBox from "./InputBox";
interface InputFieldProps {
  label: "Email Address" | "Password" | "Create password" | "Confirm password";
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--dark-grey);
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;

  div {
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.5rem;
  }

  input {
    outline: none;
    padding-left: 2rem;
    border: 1px solid var(--grey);
    border-radius: 4px;
    transition: border-color 0.3s ease; 
    &:hover {
      border: 1px solid var(--dark-purple);
      box-shadow: 0 0 10px var(--purple);
    }
    &:active{
      border: 1px solid var(--dark-purple);
      box-shadow: 0 0 10px var(--purple);
    }
    &:focus{
      border: 1px solid var(--dark-purple);
      box-shadow: 0 0 10px var(--purple);
    }

  }
`;

function InputField({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <StyledInputField>
      <label htmlFor={name}>{label}</label>
      <InputBox/>
    </StyledInputField>
  );
}

export default InputField;
