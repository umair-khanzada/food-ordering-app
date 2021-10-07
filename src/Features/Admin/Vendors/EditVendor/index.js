import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex, ERROR, GetHeader, passwordRegex } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { editUserById } from '../../Common Requests/mutation';
import { FetchUserById } from '../../Common Requests/request';

const EditVendor = () => {
  const { headers } = GetHeader();
  const successMessage = 'Successfull vendor has been edited';
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const initialEditVendorField = [
    {
      type: SELECT,
      label: 'Role',
      values: ['user', 'vendor'],
      value: [],
      name: 'role',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialEditVendorField, value, index);
        setFields(updatedFields);
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
        const updatedFields = fieldChangeHandler(initialEditVendorField, value, index);
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
        const updatedFields = fieldChangeHandler(initialEditVendorField, value, index);
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
        const updatedFields = fieldChangeHandler(initialEditVendorField, value, index);
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
        const updatedFields = fieldChangeHandler(initialEditVendorField, value, index);
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
  const [fields, setFields] = useState(initialEditVendorField);
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(editUserById, {
    onSuccess: () => {
      setFields(initialEditVendorField);
      dispatch(toggleSnackbarOpen({ snackbarMessage: successMessage, messageType: ERROR }));
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
  const [vendor, setVendor] = useState('');

  const { data: vendorById, isFetching } = FetchUserById(id);

  useEffect(() => {
    if (vendorById !== undefined) {
      setVendor(vendorById);
      fields.map((field) => {
        field.value = vendorById[field.name];
      });
      setFields(fields);
    }
  }, [vendorById]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);

    if (isValid) {
      const userData = {};
      fields.map(({ name, value }) => {
        userData[name] = value;
      });

      mutateAsync({ id, headers, userData });
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
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Vendor" onSaveSuccess={isSuccess} />
          <Snackbar />
        </>
      )}
    </>
  );
};

export default EditVendor;
