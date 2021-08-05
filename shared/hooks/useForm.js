import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  function setFieldValue(text, inputName) {
    setValues((currentValues) => ({ ...currentValues, [inputName]: text }));
  }

  function handleSubmit(event) {
    if (typeof callback === 'function') {
      callback();
    }
  }

  function reset() {
    setValues({});
  }

  return {
    setFieldValue,
    handleSubmit,
    values,
    reset,
    setValues,
  };
};

export default useForm;
