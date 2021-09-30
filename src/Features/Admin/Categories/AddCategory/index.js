import React, { useState } from 'react';

// import { Snackbar } from '@material-ui/core';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { addCategory } from '../../actions';

const AddCategory = () => {
  const dispatch = useDispatch();

  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

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
      setOnSaveSuccess(true);
      const name = fields.map(({ value }, index) => value);

      dispatch(
        addCategory({
          name: name[0],
          description: 'sjdhsj',
          createdBy: '613617938f70a058b41406de',
          kitchenId: '614b449d74d9603870512b13',
        }),
      );
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

  return (
    <>
      <div>
        <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Category" onSaveSuccess={onSaveSuccess} />

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
