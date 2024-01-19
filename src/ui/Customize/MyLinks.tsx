import styled from "styled-components";
import { useState } from "react";
import { useDatabase } from "../../contexts/DatabaseContext";

import { LinkInterface } from "../../redux/types";
import GetYouStarted from "./GetYouStarted";
import EditLinks from "./EditLinks";
import MainButton from "../MainButton";
import LinkComponent from "./LinkComponent";


interface MyLinksProps {
  count: number;
}

const StyledMyLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--light-grey)
`;

const StyledLinkArr= styled.div`
  width: 100%;
`
export default function MyLinks(props:MyLinksProps) {
  const { linkArray } = useDatabase();
  const [formData, setFormData] = useState<LinkInterface[]>(linkArray);

  const handleChange = (index: number, field: Partial<LinkInterface>) => {
    const updatedData = formData.map((item, i) => (i === (index -1) ? { ...item, ...field } : item))
    setFormData(updatedData);
  };
 
  const handleRemove = (index: number) => {
    const updatedData = formData.filter((item) => item["index"] !== index);
    setFormData(updatedData);
  };
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const startingIndex = formData.length + 1 || 0;

  const linkComponents = Array.from({ length: props.count }, (_, index) => (
    <LinkComponent
      key={startingIndex + index}
      index={startingIndex + index}
      platform={formData[startingIndex + index]?.platform} 
      address={formData[startingIndex + index]?.address}   
      onRemove={() => handleRemove(startingIndex + index)}
    />
  ));

  const {count} = props
  return(
    <StyledMyLinks>
      <StyledLinkArr>
      {linkArray.length === 0 && count === 0 ? <GetYouStarted />:<EditLinks count = {count}/>}
      {linkComponents}
      </StyledLinkArr>
      <MainButton />
      </StyledMyLinks>

  );
}
