import React, { useState } from 'react';

import { useMutation } from 'react-query';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { DATE, MULTI_SELECT, PRICE, SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { GetHeader } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { createOrder } from '../mutation';

const AddOrder = () => {
  const { headers } = GetHeader();
  const { isLoading, mutateAsync, isSuccess, status } = useMutation(createOrder, {
    onSuccess: () => {
      const resetFields = fields.map((field) => {
        return {
          ...field,
          value: '',
        };
      });
      setFields(resetFields);
    },
  });

  // const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  console.log('status', status);
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Vendor',
      values: ['Yousuf', 'Dilawer'],
      value: [],
      name: 'vendor',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: MULTI_SELECT,
      label: 'Menus',
      values: ['Karhai', 'Biryani', 'Salad'],
      value: [],
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
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: DATE,
      label: 'Date',
      value: '',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    // isValid ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
    if (isValid) {
      const orderData = {};

      fields.map(({ label, value }) => {
        orderData[label] = value;
      });
      console.log('orderDAta', orderData);
      mutateAsync({ headers, orderData });
    }
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      clickHandler: saveHandler,
      isLoading,
    },
  ];

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Add Order" onSaveSuccess={isSuccess} />;
};

export default AddOrder;
