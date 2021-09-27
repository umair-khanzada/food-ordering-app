import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { FetchUserById } from '../../Common Requests/request';
import { updateUserById } from '../actions';

const AddUser = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [user, setUser] = useState('');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['User', 'Vendor'],
      value: [],
      name: 'role',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      value: '',
      name: 'email',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!emailRegex.test(value)) {
          return 'Email type is not valid';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: '',
      name: 'name',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: '',
      name: 'password',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (value.length < 8) {
          return 'Password must be 8 characters long';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: '',
      name: 'contact',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!contactRegex.test(value)) {
          return 'Contact length or Type is not valid';
        }
        return '';
      },
    },
  ]);

  const userById = FetchUserById(id);

  useEffect(() => {
    if (userById !== undefined) {
      setUser(userById);
      fields.map((field) => {
        if (field.label === 'Email') {
          field.value = userById.email;
        } else if (field.label === 'Name') {
          field.value = userById.name;
        } else if (field.label === 'Password') {
          field.value = userById.password;
        }
      });
      setFields(fields);
    }
  }, [userById]);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      const userData = {};
      fields.map(({ name, value }) => {
        if (name !== 'building' && name !== 'contact' && name !== 'role') {
          userData[name] = value;
        }
      });
      dispatch(
        updateUserById({
          id,
          userData,
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

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit User" onSaveSuccess={onSaveSuccess} />;
};

export default AddUser;
