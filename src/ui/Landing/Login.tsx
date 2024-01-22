import { useState } from "react";
import styled from "styled-components";

import InputField from "./InputField";
import MainButton from "../MainButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/authSlice";

const StyledContainer = styled.div`
  border: 1px solid black;
`;

interface LoginState {
  email: string;
  password: string;
}

type inputFieldsConfig = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}[];

function Login() {
  const dispatch = useDispatch();

  const [logininfo, setLogin] = useState<LoginState>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(
    function () {
      if (isAuth) navigate("/", { replace: true });
    },
    [isAuth, navigate]
  );

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...logininfo, email: e.target.value });
  }

  function handelPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({ ...logininfo, password: e.target.value });
  }

  const handleLoginClick = () => {
    dispatch(login(logininfo));
  };

  const inputFields: inputFieldsConfig = [
    {
      label: "Email Address",
      name: "email-address",
      type: "email",
      value: logininfo.email,
      placeholder: "e.g. alex@email.com",
      onChange: handleEmailChange,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: logininfo.password,
      placeholder: "Enter your password",
      onChange: handelPasswordChange,
    },
  ];

  return (
    <StyledContainer>
      <h1>Login</h1>
      <div className="notes">
        Add your details below to get back into the app
      </div>
      {inputFields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          name={field.name}
          type={field.type}
          value={field.value}
          placeholder={field.placeholder}
          onChange={field.onChange}
        />
      ))}
      <MainButton
        bgColor="#633CFF"
        color="white"
        border="none"
        onClick={handleLoginClick}
      >
        Login
      </MainButton>
      <div>
        <div>Don't have an account?</div>
        {/* switchComponent */}
        <div onClick={() => {}}>Create account</div>
      </div>
    </StyledContainer>
  );
}

export default Login;
