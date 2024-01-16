// import React from "react";
import MainButton from "../MainButton";
import React, { useState } from "react";
import styled from "styled-components";
import { useDatabase } from "../../contexts/DatabaseContext";
import InputField from "./InputField";
import { useContext } from "react";
import e from "express";

const StyledContainer = styled.div`
  border: 1px solid black;
`;

interface CreateAccountState {
  email: string;
  password: string;
}

interface CreateAccountProps {
    switchComponent: () => void;
  }
  

function CreateAccount(child:CreateAccountProps) {
  const { addToUserDatabase } = useDatabase();
  const {switchComponent} = child

  const [createAccount, setCreateAccount] = useState<CreateAccountState>({
    email: "",
    password: "",
  });

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCreateAccount({ ...createAccount, email: e.target.value });
  }
  
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCreateAccount({ ...createAccount, password: e.target.value });
  }

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  function handleConfirmPasswordChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setConfirmPassword(e.target.value);
  }

  function handleCreateNewAccountClick () {

    const accountInfo = {...createAccount, 
        id:1,
        profile_picture:"", 
        first_name:"", 
        last_name:"",
        profile_email:"",
        link:[]}

    addToUserDatabase(accountInfo);
  }

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
      label: "Email address",
      name: "email",
      type: "email",
      value: createAccount.email,
      placeholder: "e.g. alex@email.com",
      onChange: handleEmailChange,
    },
    {
      label: "Create password",
      name: "password",
      type: "password",
      value: createAccount.password,
      placeholder: "At least 8 characters",
      onChange: handlePasswordChange,
    },
    {
      label: "Confirm password",
      name: "confirm-password",
      type: "password",
      value: confirmPassword,
      placeholder: "At least 8 characters",
      onChange: handleConfirmPasswordChange,
    },
  ];

  return (
    <StyledContainer>
      <div>Create account</div>
      <div>Let's get you started sharing your links!</div>
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
      <MainButton
        bgColor="#633CFF"
        color="white"
        onClick={handleCreateNewAccountClick}
      >
        Create new account
      </MainButton>
      <div>
        <div>Already have an account?</div>
        <div onClick={switchComponent}>Login</div>
      </div>
    </StyledContainer>
  );
}

export default CreateAccount;
