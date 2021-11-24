import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import AddEditForm from '../../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE, PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader/index';
import { ERROR, GetHeader, imgURLRegex, SUCCESS } from '../../../../scripts/constants';
import { fieldChangeHandler, SelectChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { updateItemById } from '../../mutation';
import { FetchCategories, FetchItemsById } from '../../request';

const EditMenu = () => {
  const [categoryData, setCategoryData] = useState([]);
  const history = useHistory();
  const SuccessMessage = 'Successfull menu has been updated';
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const { headers } = GetHeader();

  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  const categoriesData = FetchCategories();

  const { data: itemsById, isFetching } = FetchItemsById(id);

  useEffect(() => {
    if (categoriesData !== undefined) {
      saveCategories(categoriesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const saveCategories = (categoriesDetail) => {
    const resData = categoriesDetail.map(({ name, id }) => ({ label: name, id }));

    const updatedFields = SelectChangeHandler(fields, resData, 0);
    setCategoryData(resData);
    setFields(updatedFields);
  };
  useEffect(() => {
    if (itemsById !== undefined) {
      saveItemsId(itemsById);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsById]);

  const saveItemsId = (itemsId) => {
    const {
      name,
      price,
      categoryId: { id },
      imgUrl,
    } = itemsId;

    setFields(fieldChangeHandler(fields, id, 0));
    setFields(fieldChangeHandler(fields, price, 1));
    setFields(fieldChangeHandler(fields, name, 2));
    setFields(fieldChangeHandler(fields, imgUrl, 3));
  };
  const initialItemEditField = [
    {
      type: AUTO_COMPLETE,
      label: 'Categories',
      values: categoryData,
      value: '',
      name: 'categoryId',
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
      type: PRICE,
      label: 'Price',
      value: '',
      name: 'price',
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
      name: 'name',
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
      name: 'imgUrl',
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
      const items = {};
      items['createdBy'] = vendorId;
      fields.map(({ name, value }) => (items[name] = value));
      mutate({ items, headers, itemsById });
    }
  };
  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);

    setFields(updatedFields);
  };

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation(updateItemById, {
    onSuccess: (response) => {
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: SuccessMessage,
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

  return <>{isFetching ? <Loader /> : <AddEditForm buttons={buttons} fields={fields} heading="Edit Item" />}</>;
};

export default EditMenu;
