import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { AuthToken } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { category } from '../../mutation';

const AddCategory = () => {
  const token = AuthToken();
  const dispatch = useDispatch();
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
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
      setLoading(true);
      setOnSaveSuccess(true);
      const name = fields.map(({ value }, index) => value);
      mutate({
        category: {
          name: name[0],
          createdBy: adminId,
        },
        token,
      });
    } else {
      setOnSaveSuccess(false);
      setLoading(false);
    }
  };

  const { mutate, mutateAsync, isLoading, error } = useMutation(category, {
    onSuccess: (response) => {
      setLoading(false);

      return response;
    },
  });

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
    <CommonGridBasedForm
      buttons={buttons}
      fields={fields}
      heading="Add Category"
      loading={loading}
      onSaveSuccess={onSaveSuccess}
    />
  );
};

export default AddCategory;
