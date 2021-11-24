import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { ERROR, GetHeader, SUCCESS, imgURLRegex } from '../../../../scripts/constants';
import { validateOnSubmit, SelectChangeHandler, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { items } from '../../mutation';
import { FetchCategories } from '../../request';
const AddMenu = () => {
  const { headers } = GetHeader();
  const successMessage = 'Successfull menu has been created';
  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const [categoryData, setCategoryData] = useState([]);
  const categoriesData = FetchCategories();
  useEffect(() => {
    if (categoriesData !== undefined) {
      saveCategories(categoriesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const saveCategories = (categoriesDetails) => {
    const resData = categoriesDetails.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 0);
    setCategoryData(resData);
    setFields(updatedFields);
  };
  const initialItemRestaurant = [
    {
      type: AUTO_COMPLETE,
      label: 'Categories',
      values: categoryData,
      name: 'categoryId',

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
      type: PRICE,
      name: 'price',
      label: 'Price',
      value: '',
      isValid: true,
      errorMessage: '',
      onChange: (event) => {
        setFormFields(initialItemRestaurant, event.target.value, 1);
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Name',
      value: '',
      name: 'name',
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',
      onChange: (event) => {
        setFormFields(initialItemRestaurant, event.target.value, 2);
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Image URL',
      value: '',
      name: 'imgUrl',
      textFieldType: 'text',
      variant: 'standard',
      isValid: true,
      errorMessage: '',
      onChange: (event) => {
        setFormFields(initialItemRestaurant, event.target.value, 3);
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

  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);
    setFields(updatedFields);
  };
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    if (isValid) {
      const items = {};
      items['createdBy'] = vendorId;
      fields.map(({ name, value }) => (items[name] = value));

      mutate({
        items,
        headers,
      });
    }
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate, isLoading } = useMutation(items, {
    onSuccess: (response) => {
      setFields(initialItemRestaurant);
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
      return response;
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;

      if (status === 401) {
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
  return <AddEditForm buttons={buttons} fields={fields} heading="Add Item" loading={isLoading} />;
};
export default AddMenu;
