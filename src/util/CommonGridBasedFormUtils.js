export const validateOnSubmit = (fields) => {
  let isValid = true;
  const validateArray = fields.map((field) => {
    if (!field.value?.length) {
      isValid = false;
      field.errorMessage = field.label + ' field cannot be empty';

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

  if (currentTextField.getValidation) {
    const getValidationError = currentTextField.getValidation(currentTextField.value);
    currentTextField.errorMessage = getValidationError;
  }
  currentTextField.value = value;
  return prevForm;
};