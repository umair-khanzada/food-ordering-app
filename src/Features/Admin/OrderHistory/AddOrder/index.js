import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { DATE, MULTI_SELECT, PRICE, SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';

const AddOrder = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Vendor',
      values: ['Yousuf', 'Dilawer'],
      value: [],
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: MULTI_SELECT,
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
      value: [],
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: '',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: DATE,
      label: 'Date',
      value: '',
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Order" onSaveSuccess={onSaveSuccess} />;
};

export default AddOrder;
