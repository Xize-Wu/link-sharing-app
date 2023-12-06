import { useState } from "react";
import styled from "styled-components";

import { useDatabase } from "../contexts/DatabaseContext";

import InputField from "../ui/InputField";
import LoginCreateButton from "../ui/LoginCreateButton";

const StyledContainer = styled.div`
padding: 2px;
width: 40em;
border: 1px solid black;`

interface LoginState {
    email: string;
    password: string;
}

function Login() {
    const { loginFunction } = useDatabase()    
    
    const [login, setLogin] = useState<LoginState>({ email: "", password: "" });
    
    function handleEmailChange (e:React.ChangeEvent<HTMLInputElement>){
        setLogin({...login, email: e.target.value})
    }

    function handelPasswordChange (e:React.ChangeEvent<HTMLInputElement>){
        setLogin({...login, password: e.target.value})
    }

    const handleLoginClick = () => {
        loginFunction(login);
    };

    return (
        <StyledContainer>
            <InputField 
                label="Email Address"
                name="email-address"
                type="text"
                value={login.email}
                placeholder="e.g. alex@email.com"
                onChange={handleEmailChange}/>
            <InputField
                label="Password"
                name="password"
                type="password"
                value={login.password}
                placeholder="Enter your password"
                onChange={handelPasswordChange}
            />
            {/* <LoginCreateButton bgColor="#633CFF" buttonText="Login" onClick={loginFunction}/> */}
            <button onClick={handleLoginClick}>Login</button>
        </StyledContainer>
    )
}

export default Login