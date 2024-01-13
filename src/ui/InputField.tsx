import { styled } from "styled-components";

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
      <div>
        {label === "Email Address" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#737373"
              d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#737373"
              d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
            />
          </svg>
        )}
        <input
          name={name}
          key={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </StyledInputField>
  );
}

export default InputField;
