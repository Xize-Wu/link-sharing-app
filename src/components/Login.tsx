import styled from "styled-components";
import LoginCreateButton from "../styles/LoginCreateButton";
import { useDatabase } from "../contexts/DatabaseContext";
import { useState } from "react";

const StyledContainer = styled.div`
padding: 2px;
width: 40em;
border: 1px solid black;`

function Login() {
    const { testFunction } = useDatabase()
    const result = testFunction()
    interface LoginState {
        email:string;
        password: string;
    }
    const [login, setLogin] = useState<LoginState>({email:"", password:""});

    return (
        <StyledContainer>
            {result}
            <div>Login</div>
            <div>Add your details below to get back into the app</div>
            <div>
                <div>Email Address</div>
                <input
                type="text"
                value={login.email}
                placeholder = "e.g. alex@email.com"
                onChange={(e)=> setLogin({...login, email: e.target.value})}
                />
            </div>
            <div>
                <div>Password</div>
            <input
                            type="password"
                            value={login.password}
                            placeholder = "Enter your password"
                            onChange={(e)=> setLogin({...login, password: e.target.value})}
                            />
            <div>
                Don't have an account? Create account
            </div>
            </div>
            <LoginCreateButton bgColor="#633CFF" buttonText="Login" />
        </StyledContainer>
    )
}

export default Login