import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { ERROR, SUCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { InsertBalance, updateOrderById } from '../../mutation';
import { FetchOrderById } from '../../request';
import { GetBalanceByUserId } from '../request';

const EditOrderList = () => {
  const dispatch = useDispatch();
  const [onSaveSuccess] = useState(false);
  const vendor_Id = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [userId, setUserId] = useState(0);
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
  const { data: balance, refetch } = GetBalanceByUserId(userId);
  const { mutate: addBalanceMutate } = useMutation(InsertBalance, {
    onSuccess: () => {
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Successfull order has been edited',
          messageType: SUCCESS,
        }),
      );
      refetch();
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: message,
          messageType: ERROR,
        }),
      );
    },
  });

  const setUserBalance = () => {
    let previousBalance = 0;

    const { amount } = orderById;
    balance.map(({ vendorId: { id }, amount }) => {
      if (id === vendor_Id) {
        previousBalance = amount;
      }
    });

    const currentBalance = previousBalance - amount;

    const totalBalance = {
      userId,
      vendorId: vendor_Id,
      amount: currentBalance,
    };

    addBalanceMutate(totalBalance);
  };
  useEffect(() => {
    if (orderById) {
      fields[0].value = orderById['status'];
      const { userId } = orderById;
      setUserId(userId);
      setFields(fields);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderById]);
  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    const [{ value }] = fields;
    if (isValid) {
      const updatedOrder = {
        status: value,
        amount: orderById['amount'],
      };
      mutateAsync({ id, updatedOrder });
      if (fields[0].value === 'received') {
        setUserBalance();
      } else {
        dispatch(
          toggleSnackbarOpen({
            snackbarMessage: 'Successfull order has been edited',
            messageType: SUCCESS,
          }),
        );
      }
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
