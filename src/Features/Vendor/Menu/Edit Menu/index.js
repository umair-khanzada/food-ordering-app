import React, { useState } from 'react';

import AddEditForm from '../../../../components/AddEditForm';
import { PRICE, SELECT, TEXT_FIELD } from '../../../../components/AddEditForm/FieldTypes';

const EditMenu = () => {
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

  const [category, setCategory] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [price, setPrice] = useState(30);
  const [name, setName] = useState();
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Categories',
      values: ['Bread', 'Gravy'],
      value: category,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setCategory(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: SELECT,
      label: 'Restaurant',
      values: ['KFC', 'DOMINOS', 'DARBAR'],
      value: restaurant,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setRestaurant(event.target.value);
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
      type: TEXT_FIELD,
      label: 'Name',
      value: name,
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setName(event.target.value);
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

  return <AddEditForm buttons={buttons} fields={fields} heading="Edit Item" onSaveSuccess={onSaveSuccess} />;
};

export default EditMenu;
