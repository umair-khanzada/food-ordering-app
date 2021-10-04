import React, { useState } from 'react';

// import { Snackbar } from '@material-ui/core';
import { Button } from '@mui/material';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { category } from '../mutation';

const AddCategory = () => {
  const dispatch = useDispatch();

  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const { headers } = GetHeader();

  const adminId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  const [fields, setFields] = useState([
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
  ]);

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

  const { mutate, mutateAsync, isLoading, error, isSuccess } = useMutation(category, {
    onSuccess: (response) => {
      return response;
    },
  });

<<<<<<< HEAD
  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
    },
  ];
=======
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

>>>>>>> 9456c8ab6b167c8346437433ad8929793a543177
  return (
    <>
      <div>
        <CommonGridBasedForm
          buttons={buttons}
          fields={fields}
          heading="Add Category"
          loading={isLoading}
          onSaveSuccess={isSuccess}
        />

        <Button
          onClick={() => {
            dispatch(toggleSnackbarOpen('Successfull Your order has been placed'));
          }}
        >
          Click Me
        </Button>
        <div>
          <Snackbar timeout={4000} type="success" />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
