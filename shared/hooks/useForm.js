import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  function handleChange(event, name = '') {
    const { value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
  }

  // React Native doesn't use `name` props/attributes on input elements,
  // so we can't easily pull them off the change events. This works around
  // that by returning a change handler function with a name.
  function createChangeHandler(inputName) {
    return (event) => handleChange(event, inputName);
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
    createChangeHandler,
    handleChange,
    handleSubmit,
    values,
    reset,
    setValues,
  };
};

export default useForm;
