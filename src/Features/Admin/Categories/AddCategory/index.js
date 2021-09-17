import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';

const AddCategory = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const validateOnSubmit = () => {
    let isValid = true;
    const ValidateArray = fields.map((field) => {
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

  const [category, setCategory] = useState('');
  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Category Name',
      variant: 'standard',
      value: category,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setCategory(event.target.value);
        fields[index].value = event.target.value;
      },
    },
  ]);

  const saveHandler = () => {
    validateOnSubmit() ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
  };

  const buttons = {
    button: [
      {
        type: 'button',
        name: 'save',
        minWidth: '100%',
        clickHandler: saveHandler,
      },
    ],
  };
  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Category" onSaveSuccess={onSaveSuccess} />;
};

export default AddCategory;
