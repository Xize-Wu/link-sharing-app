import styled from "styled-components";
import { useDatabase } from "../../contexts/DatabaseContext";
import useForm from "../../hooks/useForm";
import LinkComponent from "./LinkComponent";
const StyledEditLinks = styled.div``;

interface EditLinksProps {
  count: number;
};

export default function EditLinks(props: EditLinksProps) {
  const { linkArray } = useDatabase();

  const { formData, handleChange, handleSubmit } = useForm(linkArray || []);

  if (!linkArray) {
    return <></>;
  }
  return (
    <StyledEditLinks>
      <StyledEditLinks>
        {formData.map((item) => (
          <LinkComponent
            key={item.index}
            index={item.index}
            platform={item.platform}
            address={item.address}
            onChange={(field) => handleChange(item.index, field)}
            />
        ))}
      </StyledEditLinks>
    </StyledEditLinks>
  );
}
