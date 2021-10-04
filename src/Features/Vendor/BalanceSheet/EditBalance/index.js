import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { PRICE } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { fieldChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';

const EditBalanceSheet = () => {
  const dispatch = useDispatch();

  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [fields, setFields] = useState([
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
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    const [{ value: amount }] = fields;

    console.log(amount);
    // isValid && dispatch(editUser({ id, name, email, password, contact, setOnSaveSuccess }));
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      color: 'primary',
      clickHandler: saveHandler,
    },
  ];

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Balance" onSaveSuccess={onSaveSuccess} />;
};

export default EditBalanceSheet;
