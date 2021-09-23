import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { addRestaurant } from '../../action';
const AddRestaurant = () => {
  const dispatch = useDispatch();
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const [restaurant, setRestaurant] = useState('');
  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Restaurant Name',
      variant: 'standard',
      value: restaurant,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setRestaurant(event.target.value);
        fields[index].value = event.target.value;
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      setOnSaveSuccess(true);
      const name = fields.map(({ value }) => value);
      dispatch(
        addRestaurant({
          name: name[0],
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
    <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Restaurant" onSaveSuccess={onSaveSuccess} />
  );
};

export default AddRestaurant;
