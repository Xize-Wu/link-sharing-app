import { useState, ChangeEvent } from "react";

interface InitialStateType {
  [key: string]: any;
}

const useForm = (initialState: InitialStateType) => {
  const [formData, setFormData] = useState<InitialStateType>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const {name, value} = e.target
    setFormData((prev) =>({
        ... prev, [name]: value,
    }));
  };
  return {
    formData,
    handleChange
  }
};

export default useForm;