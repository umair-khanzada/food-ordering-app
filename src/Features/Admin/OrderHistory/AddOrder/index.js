import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { DATE, MULTI_SELECT, PRICE, SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';

const AddOrder = () => {
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
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        setVendor(value);
        fields[index].value = value;
      },
    },
    {
      type: MULTI_SELECT,
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
      value: menus,
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        setMenus(value);
        fields[index].value = value;
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: price,
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        setPrice(value);
        fields[index].value = value;
      },
    },
    {
      type: DATE,
      label: 'Date',
      value: date,
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        setDate(value);
        fields[index].value = value;
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Order" onSaveSuccess={onSaveSuccess} />;
};

export default AddOrder;
