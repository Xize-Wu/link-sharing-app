// import React from "react";
import LoginCreateButton from "../styles/LoginCreateButton";

import styled from "styled-components";
import { useDatabase } from "../contexts/DatabaseContext";

const StyledContainer = styled.div`
padding: 2px;`

function CreateAccount() {
    const { testFunction } = useDatabase()
    const result = testFunction()
    return (
        <StyledContainer>
            {/* <LoginCreateButton bgColor="#633CFF" buttonText="Create new account " onClick=""/> */}
        </StyledContainer>
    )
}

export default CreateAccount