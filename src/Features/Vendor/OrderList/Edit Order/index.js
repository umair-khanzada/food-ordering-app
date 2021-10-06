import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';

const EditOrderList = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Status',
      values: ['pending', 'recieved', 'rejected'],
      value: [],
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
    },
  ];

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Order" onSaveSuccess={onSaveSuccess} />;
};

export default EditOrderList;
