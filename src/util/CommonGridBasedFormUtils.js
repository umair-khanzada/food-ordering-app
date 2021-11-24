export const validateOnSubmit = (fields, checkEmpty) => {
  let isValid = true;
  const validateArray = fields.map((field) => {
    if (!(field.value?.length || field.value) && checkEmpty) {
      isValid = false;
      const { label } = field;
      field.errorMessage = label.charAt(0).toUpperCase() + label.slice(1) + ' field cannot be empty';

      return field;
    }
    if (field.errorMessage !== '') {
      isValid = false;
      return field;
    }
    field.errorMessage = '';
    return field;
  });

  return { validateArray, isValid };
};

export const fieldChangeHandler = (prev, value, index) => {
  const prevForm = [...prev];
  const currentTextField = prevForm[index];

  currentTextField.value = value;
  if (currentTextField.value !== '') {
    currentTextField.errorMessage = '';
  }

  if (currentTextField.getValidation) {
    const getValidationError = currentTextField.getValidation(currentTextField.value);
    currentTextField.errorMessage = getValidationError;
  }

  return prevForm;
};

export const SelectChangeHandler = (prev, values, index) => {
  const prevForm = [...prev];
  const currentTextField = prevForm[index];

  currentTextField.values = values;

  if (currentTextField.getValidation) {
    const getValidationError = currentTextField.getValidation(currentTextField.value);
    currentTextField.errorMessage = getValidationError;
  }

  return prevForm;
};
