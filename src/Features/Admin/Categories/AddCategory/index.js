import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { category } from '../mutation';

const AddCategory = () => {
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

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
    },
  ];
  return (
    <CommonGridBasedForm
      buttons={buttons}
      fields={fields}
      heading="Add Category"
      loading={isLoading}
      onSaveSuccess={isSuccess}
    />
  );
};

export default AddCategory;
