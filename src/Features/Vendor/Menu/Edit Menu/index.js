import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import AddEditForm from '../../../../components/CommonGridBasedForm';
import { PRICE, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader/index';
import { GetHeader } from '../../../../scripts/constants';
import { fieldChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { updateItemById } from '../../mutation';
import { FetchItemsById } from '../../request';

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

  const { data: itemsById, refetch, isFetching } = FetchItemsById(id);

  useEffect(() => {
    if (itemsById !== undefined) {
      setItem(itemsById);
      saveItemsId(itemsById);
    }
  }, [itemsById]);

  const saveItemsId = (itemsId) => {
    const { name, price, categoryId, kitchenId } = itemsId;

    fields[0].value = categoryId;
    fields[1].value = kitchenId;
    fields[2].value = price;
    fields[3].value = name;
    setFields(fields);
  };
  const initialItemEditField = [
    {
      type: TEXT_FIELD,
      label: 'Category',
      placeholder: 'Categories',
      value: '',
      isValid: true,
      textFieldType: 'text',
      variant: 'standard',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      label: 'Restaurant',
      placeholder: 'Restaurants',
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
  const { mutate, mutateAsync, isLoading, isSuccess } = useMutation(updateItemById, {
    onSuccess: (response) => {
      setFields(initialItemEditField);
      return response;
    },
  });
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
