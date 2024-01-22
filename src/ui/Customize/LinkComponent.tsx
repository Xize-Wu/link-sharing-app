import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateLinkAddress, updateLinkPlatform } from "../../redux/authSlice";
  
const StyledLinkComponent = styled.div`
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  width: 100%;
`;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIndex = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const StyledSvg = styled.div`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
`;
const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
`;

const StyledRemove = styled.div``;

interface LinkProps {
  index: number;
  platform: string | undefined;
  address: string | undefined;
}

export default function LinkComponent(props: LinkProps) {
  const { index, platform, address } = props;

  const dispatch = useDispatch();

  function handlePlatformChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    dispatch(updateLinkPlatform({ index: index, platform: e.target.value }));
  }

  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    dispatch(updateLinkAddress({ index: index, address: e.target.value }));
  }

  return (
    <StyledLinkComponent>
      <StyledLabel>
        <StyledIndex>
          <StyledSvg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6"
              fill="none"
              viewBox="0 0 12 6"
            >
              <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
            </svg>
          </StyledSvg>
          Link #{index}
        </StyledIndex>

        <StyledRemove onClick={() => {}}>remove</StyledRemove>
      </StyledLabel>
      <form>
        <StyledInputField>
          Platform
          <StyledInput
            type="text"
            value={platform}
            onChange={handlePlatformChange}
          />
        </StyledInputField>
        <StyledInputField>
          Link
          <StyledInput
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </StyledInputField>
      </form>
    </StyledLinkComponent>
  );

}
