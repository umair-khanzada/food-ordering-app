import React, { useState } from 'react';

import CommonGridBasedForm from '../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../redux/ActionTypes';
import { contactRegex } from '../../../scripts/constants';

const AddUser = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const validateOnSubmit = () => {
    let isValid = true;

    const ValidateArray = fields.map((field) => {
      console.log(field.value);

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

  const [email, setEmail] = useState('');

  const [contact, setContact] = useState('');

  const [name, setName] = useState('');

  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,

      textFieldType: 'text',

      label: 'Name',

      variant: 'standard',

      value: 'User',
      disabled: isEdit,
      isValid: true,

      errorMessage: '',

      onChange: (event, index) => {
        setName(event.target.value);

        fields[index].value = event.target.value;
      },
    },

    {
      type: TEXT_FIELD,

      textFieldType: 'email',

      label: 'Email',

      variant: 'standard',

      value: 'user@gmail.com',
      disabled: isEdit,
      isValid: true,

      errorMessage: '',

      onChange: (event, index) => {
        setEmail(event.target.value);

        fields[index].value = event.target.value;

        fields[index].getValidation(event.target.value, index);
      },

      getValidation: (value, index) => {
        if (!emailRegex.test(value)) {
          fields[index].errorMessage = 'Email type is not valid';

          fields[index].isValid = false;
        } else {
          fields[index].errorMessage = '';

          fields[index].isValid = true;
        }
      },
    },

    {
      type: TEXT_FIELD,

      textFieldType: 'text',

      label: 'Contact',

      variant: 'standard',

      value: '03412132212',
      disabled: isEdit,
      isValid: true,

      errorMessage: '',

      onChange: (event, index) => {
        setContact(event.target.value);

        fields[index].value = event.target.value;

        fields[index].getValidation(event.target.value, index);
      },

      getValidation: (value, index) => {
        if (!contactRegex.test(value)) {
          fields[index].errorMessage = 'Contact length or Type is not valid';

          fields[index].isValid = false;
        } else {
          fields[index].errorMessage = '';

          fields[index].isValid = true;
        }
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

        name: 'Edit',

        minWidth: '100%',

        clickHandler: saveHandler,
      },
    ],
  };

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Profile" onSaveSuccess={onSaveSuccess} />;
};

export default AddUser;
