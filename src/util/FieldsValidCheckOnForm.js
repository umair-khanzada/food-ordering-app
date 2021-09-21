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
