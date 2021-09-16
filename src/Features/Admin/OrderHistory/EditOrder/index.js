import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { DATE, MULTI_SELECT, PRICE, SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';

const EditOrder = () => {
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

  const [vendor, setVendor] = useState([]);
  const [menus, setMenus] = useState([]);
  const [price, setPrice] = useState(30);
  const [date, setDate] = useState();
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Vendor',
      values: ['Yousuf', 'Dilawer'],
      value: vendor,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setVendor(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: MULTI_SELECT,
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
      value: menus,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setMenus(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: price,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setPrice(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: DATE,
      label: 'Date',
      value: date,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setDate(event.target.value);
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Order" onSaveSuccess={onSaveSuccess} />;
};

export default EditOrder;
