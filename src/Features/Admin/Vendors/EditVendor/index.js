import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';
import { fetchVendorById, updateVendorById } from '../actions';

const EditVendor = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const history = useHistory();
  const [role, setRole] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  const [building, setBuilding] = useState('');
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['User', 'Vendor'],
      value: role,
      errorMessage: '',
      name: 'role',
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
      value: email,
      name: 'email',
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
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Building',
      variant: 'standard',
      value: building,
      name: 'building',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setBuilding(value);
        fields[index].value = value;
      },
    },
  ]);
  const [vendor, setVendor] = useState('');
  const getUserResponseFromEpic = (response) => {
    setVendor(response);
    fields.map((field) => {
      if (field.label === 'Email') {
        field.value = response.email;
      } else if (field.label === 'Name') {
        field.value = response.name;
      } else if (field.label === 'Password') {
        field.value = response.password;
      }
    });
    setFields(fields);
  };
  useEffect(() => {
    dispatch(fetchVendorById({ id, getUserResponseFromEpic }));
  }, []);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      const vendorData = {};
      fields.map(({ name, value }) => {
        if (name !== 'building' && name !== 'contact' && name !== 'role') {
          vendorData[name] = value;
        }
      });
      dispatch(
        updateVendorById({
          id,
          vendorData,
        }),
      );

      setOnSaveSuccess(true);
      history.push('/vendors');
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Vendor" onSaveSuccess={onSaveSuccess} />;
};

export default EditVendor;
