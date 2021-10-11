import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { ERROR, GetHeader, imgURLRegex } from '../../../../scripts/constants';
import { validateOnSubmit, SelectChangeHandler, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { items } from '../../mutation';
import { FetchCategories, FetchRestaurants } from '../../request';
const AddMenu = () => {
  const { headers } = GetHeader();
  const [, setSubmit] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (value) {
          setFormFields(initialItemRestaurant, value.id, 0);
        } else {
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
      onChange: (event) => {
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
      onChange: (event) => {
        setFormFields(initialItemRestaurant, event.target.value, 3);
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Image URL',
      value: '',
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',
      onChange: (event) => {
        setFormFields(initialItemRestaurant, event.target.value, 4);
      },
      getValidation: (value) => {
        if (!imgURLRegex.test(value)) {
          return 'IMG URL type is not valid';
        }
        return '';
      },
    },
  ];
  const [fields, setFields] = useState(initialItemRestaurant);

  const setFormFields = (fields, value) => {
    const updatedFields = fieldChangeHandler(fields, value);
    setFields(updatedFields);
  };
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    if (isValid) {
      mutate({
        items: {
          name: fields[3].value,
          price: fields[2].value,
          createdBy: vendorId,
          categoryId: fields[0].value,
          kitchenId: fields[1].value,
          imgUrl: fields[4].value,
        },
        headers,
      });
    }
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate, isLoading } = useMutation(items, {
    onSuccess: (response) => {
      setFields(initialItemRestaurant);
      setSubmit(true);
      return response;
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
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
      <AddEditForm buttons={buttons} fields={fields} heading="Add Item" loading={isLoading} />;
    </>
  );
};
export default AddMenu;
