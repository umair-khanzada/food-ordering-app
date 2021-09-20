import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';

const EditCategory = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [category, setCategory] = useState('');
  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Category Name',
      variant: 'standard',
      value: category,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setCategory(value);
        fields[index].value = value;
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
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

  return (
    <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Category" onSaveSuccess={onSaveSuccess} />
  );
};

export default EditCategory;
