import React, { useState } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../redux/ActionTypes';
import { contactRegex } from '../../../scripts/constants';
import { fieldChangeHandler, validateOnSubmit } from '../../../util/CommonGridBasedFormUtils';
import { editUser } from '../actions';

const UserProfile = () => {
  const { id, email, name, isLoading, contact } = useSelector((state) => {
    const {
      authReducer: { id, email, name, contact, isLoading },
    } = state;
    return {
      id,
      email,
      name,
      isLoading,
      contact,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: name,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (value.length < 3) {
          return 'Name must be of length 3 atleast';
        }
        return '';
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
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: '',
      errorMessage: 'password is required',
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
      value: contact,
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

  const history = useHistory();

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    const [{ value: name }, { value: email }, { value: password }, { value: contact }] = fields;
    isValid && dispatch(editUser({ id, name, email, password, contact, history }));
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      color: 'primary',
      clickHandler: saveHandler,
      isLoading,
    },
  ];

  return (
    <>
      <CommonGridBasedForm buttons={buttons} fields={fields} heading="Profile" />
    </>
  );
};

export default UserProfile;
