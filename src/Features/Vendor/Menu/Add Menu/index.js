import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { AuthToken } from '../../../../scripts/constants';
import { validateOnSubmit, SelectChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { items } from '../../mutation';
import { FetchCategories, FetchRestaurants } from '../../request';

const AddMenu = () => {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const token = AuthToken();
  const dispatch = useDispatch();
  const a = 7;
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
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
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
    setLoading(true);
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      setOnSaveSuccess(true);
      mutate({
        items: {
          name: fields[3].value,
          price: fields[2].value,
          createdBy: vendorId,
          categoryId: fields[0].value,
          kitchenId: fields[1].value,
        },
        token,
      });
      // dispatch(
      //   additem({
      //     name: fields[3].value,
      //     price: fields[2].value,
      //     createdBy: vendorId,
      //     categoryId: fields[0].value,
      //     kitchenId: fields[1].value,
      //   }),
      // );
    } else {
      setOnSaveSuccess(false);
      setLoading(false);
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
  const { mutate, mutateAsync, isLoading, error } = useMutation(items, {
    onSuccess: (response) => {
      setLoading(false);

      return response;
    },
  });

  return (
    <>
      <AddEditForm
        buttons={buttons}
        fields={fields}
        heading="Add Item"
        loading={loading}
        onSaveSuccess={onSaveSuccess}
      />
      ;
    </>
  );
};

export default AddMenu;
