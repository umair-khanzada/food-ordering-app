import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { addCategory } from '../../actions';

const AddCategory = () => {
  const dispatch = useDispatch();
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [onAlertMessage, setOnAlertMessage] = useState(false);

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
    // isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);

    if (isValid) {
      setOnSaveSuccess(true);
      const name = fields.map(({ value }, index) => value);
      // console.log(name[0]);
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
    if (isValid) {
      setOnAlertMessage(true);
      // console.log(name[0]);
      swal({
        title: 'Save Successfully',
        text: 'You add a category',
        icon: 'success',
      });
    } else {
      setOnAlertMessage(false);
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
    <div>
      <CommonGridBasedForm
        buttons={buttons}
        fields={fields}
        heading="Add Category"
        onAlertMessage={onAlertMessage}
        onSaveSuccess={onSaveSuccess}
      />
    </div>
  );
};

export default AddCategory;
