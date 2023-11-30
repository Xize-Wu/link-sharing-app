import styled from "styled-components";
import { useDatabase } from "../contexts/DatabaseContext";

const StyledContainer = styled.div`
padding: 2px;`

function Login() {
    const { testFunction } = useDatabase()
    const result = testFunction()
    return (
        <StyledContainer>
            {result}
        </StyledContainer>
    )
}

export default Login