import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';
import { fetchUserById, updateUserById } from '../actions';

const AddUser = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [role, setRole] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['User', 'Vendor'],
      value: role,
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
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        setEmail(value);
        fields[index].value = value;
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: password,
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
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    if (isValid) {
      console.log('clicked');
      dispatch(
        updateUserById({
          id: history.location.search.split('=')[1],
          body: {
            name: fields[2].value,
            email: fields[1].value,
            password: fields[3].value,
          },
        }),
      );
      setOnSaveSuccess(true);
    } else {
      setOnSaveSuccess(false);
    }
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const getUserResponseFromEpic = (response) => {
    setUser(response);
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
    dispatch(fetchUserById({ id: history.location.search.split('=')[1], getUserResponseFromEpic }));
  }, []);

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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit User" onSaveSuccess={onSaveSuccess} />;
};

export default AddUser;
