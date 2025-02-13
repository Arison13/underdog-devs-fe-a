import { useState } from 'react';

export default function useForms(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e, type, targetName) => {
    let name;
    let value;
    if (type === 'select') {
      name = targetName;
      value = e;
    } else if (type === 'checkbox') {
      name = e.target.value;
      value = e.target.checked;
    } else {
      name = e.target.name;
      value = e.target.value;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = e => {
    e.preventDefault();
    setFormValues(initialValues);
  };

  return [formValues, handleChange, clearForm];
}
