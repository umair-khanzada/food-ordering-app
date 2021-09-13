import React, { useEffect, useState } from 'react';

import AddEditForm from '../../../../components/AddEditForm';

const AddOrder = () => {
  const validateOnSubmit = () => {
    let isValid = true;

    const ValidateArray = fields.map((field) => {
      if (
        field.value === '' ||
        field.value === undefined ||
        field.value === null ||
        (field.value.constructor.name == 'Array' && field.value.length === 0)
      ) {
        console.log(field.value);
        isValid = false;
        return {
          ...field,
          errorMessage: field.label + ' field cannot be empty',
          isValid: false,
        };
      }
      !isValid ? null : (isValid = field.isValid);
      return field;
    });

    setFields(ValidateArray);

    return isValid;
  };

  const [vendor, setVendor] = useState([]);
  const [menus, setMenus] = useState([]);
  const [price, setPrice] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    console.log(menus, 'menus');
  }, [menus]);
  useEffect(() => {
    console.log(vendor, 'vendor');
  }, [vendor]);

  useEffect(() => {
    console.log(price, 'price');
  }, [price]);

  useEffect(() => {
    console.log(date, 'date');
  }, [date]);

  const [fields, setFields] = useState([
    {
      type: 'select',
      label: 'Vendor',
      values: ['Yousuf', 'Dilawer'],
      value: vendor,
      isValid: true,
      onChange: (event) => {
        setVendor(event.target.value);
      },
    },
    {
      type: 'multi-select',
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
      value: menus,
      isValid: true,

      onChange: (event) => {
        setMenus(event.target.value);
      },
    },
    {
      type: 'price',
      label: 'Price',
      value: price,
      isValid: true,

      onChange: (event) => {
        setPrice(event.target.value);
      },
    },
    {
      type: 'date',
      label: 'Date',
      value: date,
      isValid: true,

      onChange: (event) => {
        setDate(event.target.value);
      },
    },
  ]);

  const saveHandler = () => {
    validateOnSubmit() ? console.log('valied') : console.log('not valid');
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

  return <AddEditForm buttons={buttons} fields={fields} />;
};

export default AddOrder;
