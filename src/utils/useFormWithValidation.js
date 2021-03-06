import { useState } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest(".form").checkValidity());
  };

  const handleSetDefaultValue = (data) => {
    setValues({ ...values, name: data.name, email: data.email });
    setIsValid(true);
  };

  return { values, handleChange, handleSetDefaultValue, errors, isValid };
}
