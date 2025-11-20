import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues(prevValues => {
      return {
        ...prevValues,
        [name]: newValue
      };
    });

    if (touched[name]) {
      validateField(name, newValue);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prevTouched => {
      return {
        ...prevTouched,
        [name]: true
      };
    });
    validateField(name, values[name]);
  };

  const validateField = (fieldName, value) => {
    let error = '';

    if (!value) {
      error = 'This field is required';
    }

    setErrors(prevErrors => {
      return {
        ...prevErrors,
        [fieldName]: error
      };
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm
  };
};
