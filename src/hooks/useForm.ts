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

  return {
    formData,
    handleChange,
    handleSubmit,
    handleRemove,
  };
};

export default useForm;
