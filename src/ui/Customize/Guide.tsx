import styled from "styled-components";
import MainButton from "../MainButton";
import { addLink, getLinks } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledGuide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const StyledHeading = styled.div`
  color: var(--black);
  font-weight: bold;
  font-size: 26px;
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
`;

export default function Guide() {
  const dispatch = useDispatch();
  const links = useSelector(getLinks);

  function handleAddLink() {
    dispatch(
      addLink({
        index: links.length + 1,
        platform: "Facebook",
        address: "https://www.facebook.com/",
      })
    );
  }


  return (
    <StyledGuide>
      <StyledHeading>Customize your links</StyledHeading>
      <StyledDescription>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </StyledDescription>
      <StyledButtonContainer>
        <MainButton
          bgColor="var(--white)"
          color="var(--dark-purple)"
          border="1px solid var(--dark-purple)"
          onClick={handleAddLink}
        >
          + Add New Link
        </MainButton>
      </StyledButtonContainer>
    </StyledGuide>
  );
}
