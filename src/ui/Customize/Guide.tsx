import styled from "styled-components";
import MainButton from "../MainButton";
const StyledGuide = styled.div`
display: flex;
flex-direction: column;
`;

const StyledHeading = styled.div`

  color: var(--black);
  font-weight: bold;
  font-size: 32px;
  line-height: 150%;
`;

const StyledDescription = styled.div`
font-size: 16px;
line-height: 150%;
padding-top: 1rem;
padding-bottom: 1rem;
`;

const StyledButtonContainer = styled.div`
display: flex;
justify-content: center;

padding-top: 1rem;
`

export default function Guide() {
  function addNewLink(){
    console.log("clicked!")
    return"test"
  }

  return <StyledGuide>

    <StyledHeading>
        Customize your links
    </StyledHeading>
    <StyledDescription>
        Add/edit/remove links below and then share all your profiles with the world!
    </StyledDescription>
    <StyledButtonContainer>
    <MainButton bgColor="var(--white)" color="var(--dark-purple)" border="1px solid var(--dark-purple)" onClick = {addNewLink}>+ Add New Link</MainButton>
    </StyledButtonContainer>
  </StyledGuide>;
}
