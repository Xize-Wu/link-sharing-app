import styled from "styled-components";
import LoginCreateButton from "../styles/LoginCreateButton";
import { useDatabase } from "../contexts/DatabaseContext";

const StyledContainer = styled.div`
padding: 2px;
width: 40em;
border: 1px solid black;`

function Login() {
    const { testFunction } = useDatabase()
    const result = testFunction()
    return (
        <StyledContainer>
            <LoginCreateButton bgColor="#633CFF" buttonText="Login" />
        </StyledContainer>
    )
}

export default Login