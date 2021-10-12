import React, { useState } from 'react';
import { useEffect } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { updateRestaurantById } from '../mutation';
import { FetchRestaurantsById } from '../request';

const EditRestaurant = () => {
  const { headers } = GetHeader();
  const { mutate, isLoading } = useMutation(updateRestaurantById, {
    onSuccess: (response) => {
      setFields(initialRestaurantsEditField);
      return response;
    },
  });
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const { data: restaurantsId, isFetching } = FetchRestaurantsById(id);
  const [setRestaurantsId] = useState([]);

  useEffect(() => {
    if (restaurantsId !== undefined) {
      saveRestaurantsId(restaurantsId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantsId]);

  const saveRestaurantsId = (restaurantsId) => {
    const { name } = restaurantsId;

    fields[0].value = name;
    setFields(fields);
    setRestaurantsId(name);
  };
  const initialRestaurantsEditField = [
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Restaurant Name',
      variant: 'standard',
      value: '',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ];
  const [fields, setFields] = useState(initialRestaurantsEditField);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);

    if (isValid) {
      const name = fields.map(({ value }) => value);
      mutate({
        restaurant: {
          name: name[0],
        },
        restaurantsId,
        headers,
      });
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
    <>{isFetching ? <Loader /> : <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Restaurant" />}</>
  );
};

export default EditRestaurant;
