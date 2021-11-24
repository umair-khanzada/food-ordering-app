import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex, GetHeader, ERROR, SUCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { editUserById } from '../../Common Requests/mutation';
import { FetchUserById } from '../../Common Requests/request';

const EditUser = () => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const history = useHistory();
  const successMessage = 'Successfull user has been updated';
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [, setUser] = useState('');
  const initialEditUserField = [
    {
      type: SELECT,
      label: 'Role',
      values: ['user', 'vendor'],
      value: [],
      name: 'role',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialEditUserField, value, index);
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
        const updatedFields = fieldChangeHandler(initialEditUserField, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!emailRegex.test(value)) {
          return 'Invalid email';
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
        const updatedFields = fieldChangeHandler(initialEditUserField, value, index);
        setFields(updatedFields);
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
        const updatedFields = fieldChangeHandler(initialEditUserField, value, index);
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
  const [fields, setFields] = useState(initialEditUserField);

  const { data: userById, isFetching } = FetchUserById(id);

  useEffect(() => {
    if (userById !== undefined) {
      setUser(userById);
      fields.map((field) => {
        field.value = userById[field.name];
      });
      setFields(fields);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userById]);

  const { isLoading, mutateAsync } = useMutation(editUserById, {
    onSuccess: () => {
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;

      if (status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });

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
          <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit User" />;
        </>
      )}
    </>
  );
};

export default EditUser;
