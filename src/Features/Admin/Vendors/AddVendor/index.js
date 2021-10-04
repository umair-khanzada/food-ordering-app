import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex, ERROR, GetHeader, SUCCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { createUser } from '../../Common Requests/mutation';
const AddVendor = () => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const successMessage = 'Successfull vendor has been created';
  const [fields, setFields] = useState([
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
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      name: 'email',
      value: '',
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
  const { mutateAsync, isLoading, isSuccess } = useMutation(createUser, {
    onSuccess: () => {
      const resetFields = fields.map((field) => {
        return {
          ...field,
          value: '',
        };
      });
      setFields(resetFields);
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
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      const userData = {};
      userData['role'] = 'vendor';
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
      <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Vendor" onSaveSuccess={isSuccess} />
      {isSuccess ? <Snackbar type={SUCCCESS} /> : <Snackbar type={ERROR} />}
    </>
  );
};

export default AddVendor;
