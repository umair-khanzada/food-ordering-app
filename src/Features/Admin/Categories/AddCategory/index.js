import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { ERROR, GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { category } from '../mutation';
const AddCategory = () => {
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
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    if (isValid) {
      const name = fields.map(({ value }, index) => value);
      mutate({
        category: {
          name: name[0],
          createdBy: adminId,
        },
        headers,
      });
    }
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const { mutate, mutateAsync, isLoading, error, isSuccess } = useMutation(category, {
    onSuccess: (response) => {
      setFields(initialCategoriesField);
      return response;
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
