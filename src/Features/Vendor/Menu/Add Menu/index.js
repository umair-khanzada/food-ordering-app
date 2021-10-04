import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { AuthToken } from '../../../../scripts/constants';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, SelectChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { items } from '../../mutation';
import { FetchCategories, FetchRestaurants } from '../../request';
const AddMenu = () => {
  const token = AuthToken();
  const { headers } = GetHeader();

  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  const restaurantsData = FetchRestaurants();
  const categoriesData = FetchCategories();

  useEffect(() => {
    if (restaurantsData !== undefined) {
      saveRestaurant(restaurantsData);
    }
    if (categoriesData !== undefined) {
      saveCategories(categoriesData);
    }
  }, [restaurantsData, categoriesData]);

  const saveRestaurant = ({ data: { results } }) => {
    const resData = results.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 1);

    setFields(updatedFields);
  };

  const saveCategories = ({ data: { results } }) => {
    const resData = results.map(({ name, id }) => ({ label: name, id }));

    const updatedFields = SelectChangeHandler(fields, resData, 0);

    setFields(updatedFields);
  };

  const [category, setCategory] = useState([]);

  const [price, setPrice] = useState(null);
  const [name, setName] = useState();
  const [fields, setFields] = useState([
    {
      type: AUTO_COMPLETE,
      label: '',
      values: [],
      placeholder: 'Categories',
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, value) => {
        if (value !== null) {
          fields[0].value = value.id;
        }
      },
    },
    {
      type: AUTO_COMPLETE,
      label: '',
      placeholder: 'Restaurants',
      values: [],
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, value) => {
        if (value !== null) {
          fields[1].value = value.id;
        }
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: price,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setPrice(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Name',
      value: name,
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setName(event.target.value);
        fields[index].value = event.target.value;
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      mutate({
        items: {
          name: fields[3].value,
          price: fields[2].value,
          createdBy: vendorId,
          categoryId: fields[0].value,
          kitchenId: fields[1].value,
        },
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
    },
  ];

  const { mutate, isLoading, isSuccess } = useMutation(items, {
    onSuccess: (response) => {
      return response;
    },
  });

  return (
    <>
      <AddEditForm buttons={buttons} fields={fields} heading="Add Item" loading={isLoading} onSaveSuccess={isSuccess} />
      ;
    </>
  );
};

export default AddMenu;
