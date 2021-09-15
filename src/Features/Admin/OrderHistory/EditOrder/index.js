import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { DATE, MULTI_SELECT, PRICE, SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';

const EditOrder = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

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
    validateOnSubmit(fields, setFields) ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
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
