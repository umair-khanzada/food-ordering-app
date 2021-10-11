import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader/index';
import { ERROR, GetHeader, imgURLRegex } from '../../../../scripts/constants';
import { fieldChangeHandler, SelectChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { updateItemById } from '../../mutation';
import { FetchCategories, FetchItemsById, FetchRestaurants } from '../../request';

const EditMenu = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const { headers } = GetHeader();
  const [item, setItem] = useState('');
  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const restaurantsData = FetchRestaurants();
  const categoriesData = FetchCategories();

  const { data: itemsById, refetch, isFetching } = FetchItemsById(id);

  useEffect(() => {
    if (restaurantsData !== undefined) {
      saveRestaurant(restaurantsData);
    }
    if (categoriesData !== undefined) {
      saveCategories(categoriesData);
    }
  }, [restaurantsData, categoriesData]);

  const saveRestaurant = (restaurantsDetail) => {
    const resData = restaurantsDetail.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 1);
    setRestaurantData(resData);
    setFields(updatedFields);
  };

  const saveCategories = (categoriesDetail) => {
    const resData = categoriesDetail.map(({ name, id }) => ({ label: name, id }));

    const updatedFields = SelectChangeHandler(fields, resData, 0);
    setCategoryData(resData);
    setFields(updatedFields);
  };
  useEffect(() => {
    if (itemsById !== undefined) {
      setItem(itemsById);
      saveItemsId(itemsById);
    }
  }, [itemsById]);

  const saveItemsId = (itemsId) => {
    const {
      name,
      price,
      categoryId: { categoryid },
      kitchenId: { kitchenid },
      imgUrl,
    } = itemsId;

    setFields(fieldChangeHandler(fields, categoryid, 0));
    setFields(fieldChangeHandler(fields, kitchenid, 1));
    setFields(fieldChangeHandler(fields, price, 2));
    setFields(fieldChangeHandler(fields, name, 3));
    setFields(fieldChangeHandler(fields, imgUrl, 4));
  };
  const initialItemEditField = [
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
          setFormFields(initialItemEditField, value.id, 0);
        } else {
          setFormFields(initialItemEditField, '', 0);
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
          setFormFields(initialItemEditField, value.id, 1);
        } else {
          setFormFields(initialItemEditField, '', 1);
        }
      },
    },
    {
      type: PRICE,
      label: 'Price',
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialItemEditField, value, index);
        setFields(updatedFields);
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

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialItemEditField, value, index);
        setFields(updatedFields);
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
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(initialItemEditField, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!imgURLRegex.test(value)) {
          return 'IMG URL type is not valid';
        }
        return '';
      },
    },
  ];
  const [fields, setFields] = useState(initialItemEditField);

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
        itemsById,
      });
    }
  };
  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);

    setFields(updatedFields);
  };

  const dispatch = useDispatch();

  const { mutate, isLoading, isSuccess } = useMutation(updateItemById, {
    onSuccess: (response) => {
      setFields(initialItemEditField);
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

  return <>{isFetching ? <Loader /> : <AddEditForm buttons={buttons} fields={fields} heading="Edit Item" />}</>;
};

export default EditMenu;
