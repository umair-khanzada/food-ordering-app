export const validateOnSubmit = (fields, setFields) => {
  let isValid = true;
  const ValidateArray = fields.map((field) => {
    if (!field.value?.length) {
      isValid = false;
      field.errorMessage = field.label + ' field cannot be empty';

      return field;
    }

    field.errorMessage = '';

    return field;
  });
  setFields(ValidateArray);
  return isValid;
};
