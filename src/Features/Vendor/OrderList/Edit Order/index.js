import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { updateOrderById } from '../../mutation';
import { FetchOrderById } from '../../request';

const EditOrderList = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Status',
      values: ['pending', 'received', 'rejected'],
      value: [],
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ]);

  const { mutateAsync, isLoading } = useMutation(updateOrderById);

  const { data: orderById, isFetching } = FetchOrderById(id);

  useEffect(() => {
    if (orderById !== undefined) {
      fields[0].value = orderById['status'];
      setFields(fields);
    }
  }, [orderById]);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    if (isValid) {
      const updatedOrder = {
        status: fields[0].value,
        amount: orderById['amount'],
      };
      mutateAsync({ id, updatedOrder });
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

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Order" onSaveSuccess={onSaveSuccess} />
      )}
    </>
  );
};

export default EditOrderList;
