import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { MULTI_SELECT, SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';
import { createVendor } from '../actions';

const AddVendor = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const dispatch = useDispatch();
  const [role, setRole] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  const [building, setBuilding] = useState([]);
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['user', 'vendor'],
      value: role,
      name: 'role',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        setRole(value);
        fields[index].value = value;
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      name: 'email',
      value: email,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setEmail(value);
        fields[index].value = value;
        fields[index].getValidation(value, index);
      },
      getValidation: (value, index) => {
        if (!emailRegex.test(value)) {
          fields[index].errorMessage = 'Email type is not valid';
        } else {
          fields[index].errorMessage = '';
        }
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: name,
      name: 'name',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setName(value);
        fields[index].value = value;
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: password,
      name: 'password',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setPassword(value);
        fields[index].value = value;
        fields[index].getValidation(value, index);
      },
      getValidation: (value, index) => {
        if (value.length < 8) {
          fields[index].errorMessage = 'Password must be 8 characters long';
        } else {
          fields[index].errorMessage = '';
        }
      },
    },

    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: contact,
      name: 'contact',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setContact(value);
        fields[index].value = value;
        fields[index].getValidation(value, index);
      },
      getValidation: (value, index) => {
        if (!contactRegex.test(value)) {
          fields[index].errorMessage = 'Contact length or Type is not valid';
        } else {
          fields[index].errorMessage = '';
        }
      },
    },

    {
      type: MULTI_SELECT,
      label: 'Building',
      values: ['Main', 'Cherry', 'Qasre Sheeren'],
      value: building,
      name: 'building',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setBuilding(value);
        fields[index].value = value;
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    // isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
    if (isValid) {
      const vendorData = {};
      fields.map(({ name, value }) => {
        if (name !== 'building' && name !== 'contact') {
          vendorData[name] = value;
        }
      });

      dispatch(
        createVendor({
          // body: {
          //   email: fields[1].value,
          //   name: fields[2].value,
          //   password: fields[3].value,
          //   role: 'user',
          // },
          vendorData,
        }),
      );
      setOnSaveSuccess(true);
    } else {
      setOnSaveSuccess(false);
    }
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Vendor" onSaveSuccess={onSaveSuccess} />;
};

export default AddVendor;
