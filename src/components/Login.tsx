import { useState } from "react";
import styled from "styled-components";

import { useDatabase } from "../contexts/DatabaseContext";

import InputField from "../ui/InputField";
import LoginCreateButton from "../ui/LoginCreateButton";

const StyledContainer = styled.div`
  padding: 2px;
  width: 40em;
  border: 1px solid black;
`;

interface LoginState {
  email: string;
  password: string;
}

function Login() {
  const { loginFunction } = useDatabase();

  const [login, setLogin] = useState<LoginState>({ email: "", password: "" });

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...login, email: e.target.value });
  }

  function handelPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...login, password: e.target.value });
  }

  const handleLoginClick = () => {
    loginFunction(login);
  };

  type inputFieldsConfig = {
    label: string;
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }[];

  const inputFields: inputFieldsConfig = [
    {
      label: "Email Address",
      name: "email-address",
      type: "email",
      value: login.email,
      placeholder: "e.g. alex@email.com",
      onChange: handleEmailChange,
    },{
        label: "Password",
        name: "password",
        type:"password",
        value:login.password,
        placeholder:"Enter your password",
        onChange:handelPasswordChange,
    }
  ];
  return (
    <StyledContainer>
      <div>Login</div>
      <div>Add your details below to get back into the app</div>
      {
        inputFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={field.onChange}
            />
          ))
      }
      <LoginCreateButton
        bgColor="#633CFF"
        color="white"
        onClick={handleLoginClick}
      >
        Login
      </LoginCreateButton>
      <div>
        <div>Don't have an account?</div>
        <div>Create account</div>
      </div>
    </StyledContainer>
  );
}

export default Login;
