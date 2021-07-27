import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  // React Native doesn't use `name` props/attributes on input elements,
  // so we can't easily pull them off the change events. This works around
  // that by returning a change handler function with a name.
  function createChangeHandler(inputName) {
    return (event) => handleChange(event, inputName);
  }

  function handleChange(event, name = "") {
    const { value, type } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    callback && callback();
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
