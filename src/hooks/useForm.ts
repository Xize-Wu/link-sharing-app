import { useState } from 'react';
import { LinkInterface } from '../contexts/types';

interface FormState extends Array<LinkInterface> {}

interface FormActions {
  formData: FormState;
  handleChange: (index: number, field: Partial<LinkInterface>) => void;
  handleSubmit: () => void;
}

const useForm = (initialState: FormState): FormActions => {
  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (index: number, field: Partial<LinkInterface>) => {
    setFormData((prevData) => {
      console.log("function triggered", prevData)
      console.log("this is your props", field)
      const updatedData = prevData.map((item, i) => (i === (index -1) ? { ...item, ...field } : item));
      console.log(updatedData)
      return updatedData;
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
