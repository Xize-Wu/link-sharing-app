import styled from "styled-components";

const StyledGuide = styled.div``;

const StyledHeading = styled.h2``;

const StyledDescription = styled.div``;

const StyledAddLinkButton = styled.button``;
export default function Guide() {
  return <StyledGuide>

    <StyledHeading>
        Customize your links
    </StyledHeading>
    <StyledDescription>
        Add/edit/remove links below and then share all your profiles with the world!
    </StyledDescription>
    <StyledAddLinkButton>
        + Add new link
    </StyledAddLinkButton>
  </StyledGuide>;
}
