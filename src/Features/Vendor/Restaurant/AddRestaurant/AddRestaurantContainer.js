import React, { useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { GetHeader, RestraurantRegex, SUCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { restaurants } from '../../mutation';
const AddRestaurant = () => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const successMessage = 'Successfull resturant has been created';
  const { mutate, isLoading } = useMutation(restaurants, {
    onSuccess: (response) => {
      setFields(initialRestaurantField);
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
      return response;
    },
  });

  const [restaurant] = useState('');

  const initialRestaurantField = [
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Restaurant Name',
      variant: 'standard',
      value: restaurant,
      isValid: true,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);

        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!RestraurantRegex.test(value)) {
          return 'Restraurant type is not valid';
        }
        return '';
      },
    },
  ];

  const [fields, setFields] = useState(initialRestaurantField);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);

    if (isValid) {
      const name = fields.map(({ value }) => value);

      mutate({ name: name[0], headers });
    }
  };

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
      <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Restaurant" />
    </>
  );
};

export default AddRestaurant;
