export const validateOnSubmit = (fields, setFields) => {
  let isValid = true;
  const ValidateArray = fields.map((field) => {
    console.log(field.value);
    if (
      field.value === '' ||
      field.value === undefined ||
      field.value === null ||
      (field.value.constructor.name == 'Array' && field.value.length === 0)
    ) {
      isValid = false;
      field.errorMessage = field.label + ' field cannot be empty';
      field.isValid = false;

      return field;
    }

    field.isValid = true;
    field.errorMessage = '';

    !isValid ? null : (isValid = field.isValid);
    return field;
  });
  setFields(ValidateArray);
  return isValid;
};
