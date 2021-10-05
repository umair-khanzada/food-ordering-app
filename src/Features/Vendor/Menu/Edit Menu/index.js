import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader/index';
import { GetHeader } from '../../../../scripts/constants';
import { fieldChangeHandler, SelectChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { updateItemById } from '../../mutation';
import { FetchCategories, FetchItemsById, FetchRestaurants } from '../../request';

const EditMenu = () => {
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

    setFields(updatedFields);
  };

  const saveCategories = (categoriesDetail) => {
    const resData = categoriesDetail.map(({ name, id }) => ({ label: name, id }));

    const updatedFields = SelectChangeHandler(fields, resData, 0);

    setFields(updatedFields);
  };
  useEffect(() => {
    if (itemsById !== undefined) {
      setItem(itemsById);
      saveItemsId(itemsById);
    }
  }, [itemsById]);

  const saveItemsId = (itemsId) => {
    const { name, price, categoryId, kitchenId } = itemsId;
    const { id: categoryid } = categoryId;
    const { id: kitchenid } = kitchenId;

    fields[0].value = categoryid;
    fields[1].value = kitchenid;
    fields[2].value = price;
    fields[3].value = name;
    setFields(fields);
  };
  const initialItemEditField = [
    {
      type: AUTO_COMPLETE,
      label: '',
      values: [],
      placeholder: 'Categories',
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, value) => {
        if (value) {
          setFormFields(fields, value.id, 0);
        } else {
          setFormFields(fields, '', 0);
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
        if (value) {
          setFormFields(fields, value.id, 1);
        } else {
          setFormFields(fields, '', 1);
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
        const updatedFields = fieldChangeHandler(fields, value, index);
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
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ];
  const [fields, setFields] = useState(initialItemEditField);

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
        itemsById,
      });
    }
  };
<<<<<<< HEAD
  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);

    setFields(updatedFields);
  };
  const { mutate, mutateAsync, isLoading, isSuccess } = useMutation(updateItemById, {
    onSuccess: (response) => {
      setFields(initialItemEditField);
      return response;
    },
  });
=======
>>>>>>> b4da7a338a7aabc292ceff9805f3377c38975d9c
  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
    },
  ];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <AddEditForm
          buttons={buttons}
          fields={fields}
          heading="Edit Item"
          loading={isLoading}
          onSaveSuccess={isSuccess}
        />
      )}
    </>
  );
};

export default EditMenu;
