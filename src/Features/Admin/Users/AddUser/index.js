import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex, ERROR, GetHeader, passwordRegex, SUCCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { createUser } from '../../Common Requests/mutation';

const AddUser = () => {
  const dispatch = useDispatch();
  const { headers } = GetHeader();
  const successMessage = 'Successfull User has been created';
  const { isLoading, mutateAsync, isSuccess, isError } = useMutation(createUser, {
    onSuccess: () => {
      setFields(initialUserField);
      dispatch(toggleSnackbarOpen(successMessage));
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;

      dispatch(toggleSnackbarOpen(message));
    },
  });
  const initialUserField = [
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: '',
      name: 'name',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialUserField, value, index);
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
        const updatedFields = fieldChangeHandler(initialUserField, value, index);
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
      name: 'password',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialUserField, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (passwordRegex.test(value) && value.length >= 8) {
          return ['', true];
        }
        return ['Password must be 8 characters long and contains atleast one number and letter', false];
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
        const updatedFields = fieldChangeHandler(initialUserField, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!contactRegex.test(value)) {
          return 'Contact length or Type is not valid';
        }
        return '';
      },
    },
  ];
  const [fields, setFields] = useState(initialUserField);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);

    if (isValid) {
      const userData = {};
      userData['role'] = 'user';
      fields.map(({ name, value }) => {
        userData[name] = value;
      });

      mutateAsync({ headers, userData });
    }
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
      isLoading,
    },
  ];

  return (
    <>
      <CommonGridBasedForm
        buttons={buttons}
        fields={fields}
        heading="Add User"
        loading={isLoading}
        onSaveSuccess={isSuccess}
      />
      {isSuccess && <Snackbar type={SUCCCESS} />}
      {isError && <Snackbar type={ERROR} />}
    </>
  );
};

export default AddUser;
