import React, { useState } from 'react';

// import { Snackbar } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { ERROR, GetHeader, SUCCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
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

  const { mutate, isLoading, isSuccess, isError } = useMutation(category, {
    onSuccess: () => {
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

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
    },
  ];
  return (
    <>
      <CommonGridBasedForm
        buttons={buttons}
        fields={fields}
        heading="Add Category"
        loading={isLoading}
        onSaveSuccess={isSuccess}
      />
      {isSuccess && <Snackbar type={SUCCCESS} />}
      {isError && <Snackbar type={ERROR} />}
    </>
  );
};

export default AddCategory;
