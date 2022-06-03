import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };
  const onNumberChange = (e) => {
    let value = e.target.value;
    setValues({ ...values, [e.target.name]: JSON.parse(value) });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };
  return {
    onChange,
    onNumberChange,
    onSubmit,
    values,
    
  };
};
