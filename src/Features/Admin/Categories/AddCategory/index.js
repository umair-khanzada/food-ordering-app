import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { ERROR, GetHeader, SUCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { category } from '../mutation';
const AddCategory = () => {
  const dispatch = useDispatch();
  const successMessage = 'Successfull category has been created';
  const { headers } = GetHeader();

  const adminId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const initialCategoriesField = [
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Category Name',
      variant: 'standard',
      value: '',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ];
  const [fields, setFields] = useState(initialCategoriesField);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    const [{ value: name }] = fields;

    isValid &&
      mutate({
        category: {
          name,
          createdBy: adminId,
        },
        headers,
      });
  };

  const history = useHistory();

  const { mutate, isLoading } = useMutation(category, {
    onSuccess: (response) => {
      setFields(initialCategoriesField);
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
      return response;
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
      <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Category" />
    </>
  );
};
export default AddCategory;
