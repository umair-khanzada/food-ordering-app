import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { addCategory } from '../../actions';

const AddCategory = () => {
  const dispatch = useDispatch();
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
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
      setOnSaveSuccess(true);
      const name = fields.map(({ value }, index) => value);

      dispatch(
        addCategory({
          name: name[0],
          createdBy: adminId,
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
  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Category" onSaveSuccess={onSaveSuccess} />;
};

export default AddCategory;
