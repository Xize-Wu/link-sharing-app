import { useState } from 'react';
import { LinkInterface } from '../contexts/types';

interface FormState extends Array<LinkInterface> {}

interface FormActions {
  formData: FormState;
  handleChange: (index: number, field: Partial<LinkInterface>) => void;
  handleRemove: (index: number) => void;
  handleSubmit: () => void;
}

const useForm = (initialState: FormState): FormActions => {
  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (index: number, field: Partial<LinkInterface>) => {
    setFormData((prev) => {
      const updatedData = prev.map((item, i) => (i === (index -1) ? { ...item, ...field } : item));
      return updatedData;
    });
  };
 
  const handleRemove = (index: number) => {
    setFormData((prev) => {
      const updatedData = prev.filter((item) => item["index"] !== index);
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
    handleRemove,
  };
};

export default useForm;
