import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, SelectChangeHandler, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { items } from '../../mutation';
import { FetchCategories, FetchRestaurants } from '../../request';
const AddMenu = () => {
  const { headers } = GetHeader();
  const [isSubmit, setSubmit] = useState(false);
  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const [categoryData, setCategoryData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
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
  const saveRestaurant = (restaurantsDetails) => {
    const resData = restaurantsDetails.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 1);
    setRestaurantData(resData);
    setFields(updatedFields);
  };
  const saveCategories = (categoriesDetails) => {
    const resData = categoriesDetails.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 0);
    setCategoryData(resData);
    setFields(updatedFields);
  };
  const initialItemRestaurant = [
    {
      type: AUTO_COMPLETE,
      label: '',
      values: categoryData,
      placeholder: 'Categories',
      value: '',
      isValid: true,
      errorMessage: '',
      onChange: (event, value) => {
        console.log('submit', isSubmit);
        if (value) {
          setFormFields(initialItemRestaurant, value.id, 0);
        } else {
          console.log('bhenchod', fields);
          setFormFields(initialItemRestaurant, '', 0);
        }
      },
    },
    {
      type: AUTO_COMPLETE,
      label: '',
      placeholder: 'Restaurants',
      values: restaurantData,
      value: '',
      isValid: true,
      errorMessage: '',
      onChange: (event, value) => {
        if (value) {
          setFormFields(initialItemRestaurant, value.id, 1);
        } else {
          console.log(initialItemRestaurant);

          setFormFields(initialItemRestaurant, '', 1);
        }
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: '',
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setFormFields(initialItemRestaurant, event.target.value, 2);
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Name',
      value: '',
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setFormFields(initialItemRestaurant, event.target.value, 3);
      },
    },
  ];
  const [fields, setFields] = useState(initialItemRestaurant);
  console.log('kkk', fields);
  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);
    setFields(updatedFields);
  };
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
  const { mutate, mutateAsync, isLoading, error, isSuccess } = useMutation(items, {
    onSuccess: (response) => {
      setFields(initialItemRestaurant);
      setSubmit(true);
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
