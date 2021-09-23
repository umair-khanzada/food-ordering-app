import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { PRICE, SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { validateOnSubmit, SelectChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { fetchRestaurant, fetchCategories, additem } from '../../action';

const AddMenu = () => {
  const dispatch = useDispatch();
  const a = 7;
  const [restaurants, saveRestaurantData] = useState([]);
  const [categories, saveCategoryData] = useState([]);

  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  useEffect(() => {
    dispatch(fetchCategories(saveCategories));
    dispatch(fetchRestaurant(saveRestaurant));
  }, []);

  const saveRestaurant = (data) => {
    saveRestaurantData(data);

    // const resName = data.map(({ name }) => name);

    const updatedFields = SelectChangeHandler(fields, data, 1);
    setFields(updatedFields);
    // saveRestaurantData(data);
  };

  const saveCategories = (data) => {
    // const resName = data.map(({ name }) => name);
    // console.log(resName, 'saveCategories');
    const updatedFields = SelectChangeHandler(fields, data, 0);
    console.log(updatedFields);
    setFields(updatedFields);

    saveCategoryData(data);
  };
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  // const [category, setCategory] = useState([]);
  // const [restaurant, setRestaurant] = useState([]);
  const [price, setPrice] = useState(null);
  const [name, setName] = useState();
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Categories',

      values: [],
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        // setCategory(event.target.value);
        console.log('categoryvalue', event.target.value);
        fields[index].value = event.target.value;

        // fields[index].value = event.target.value;
      },
    },
    {
      type: SELECT,
      label: 'Restaurant',
      values: [],
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        // setRestaurant(event.target.value);
        console.log('value', event.target.value);
        console.log(restaurants, 'onchange');
        // console.log(fields);
        console.log('a', a);
        fields[index].value = event.target.value;
        // const restaurantId = restaurants.filter(({ name, id }) => {
        //   if (name === event.target.value) {
        //     return id;
        //   }
        // });
        // console.log('res', restaurantId);
        // fields[index].value = restaurantId;
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
    // isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
    if (isValid) {
      setOnSaveSuccess(true);
      dispatch(
        additem({
          name: fields[3].value,
          price: fields[2].value,
          createdBy: vendorId,
          categoryId: fields[0].value,
          kitchenId: fields[1].value,
        }),
      );
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
    <>
      {restaurants.name}
      <AddEditForm buttons={buttons} fields={fields} heading="Add Item" onSaveSuccess={onSaveSuccess} />;
    </>
  );
};

export default AddMenu;
