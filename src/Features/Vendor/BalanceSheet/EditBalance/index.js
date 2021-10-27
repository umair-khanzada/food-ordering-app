import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { PRICE } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { ERROR, GetHeader, SUCCESS } from '../../../../scripts/constants';
import { fieldChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { editBalnceByUser } from '../mutations';
import { FetchBalanceById } from '../requests';

const EditBalanceSheet = () => {
  const history = useHistory();

  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');

  const { headers } = GetHeader();
  const dispatch = useDispatch();

  const successMessage = 'Successfull balance has been updated';
  const { isLoading, data, refetch: refecthBalance } = FetchBalanceById(id);
  const { mutate, isLoading: isMutating } = useMutation(editBalnceByUser, {
    onSuccess: () => {
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
      refecthBalance();
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

  const [fields, setFields] = useState([
    {
      type: PRICE,
      label: 'Balance',
      value: '',
      errorMessage: '',

      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ]);

  useEffect(() => {
    refecthBalance();
    if (data?.amount) {
      fields[0].value = data.amount;
      setFields(fields);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);
    if (isValid) {
      const [{ value: amount }] = fields;

      const updatedData = {
        userId: data.userId,
        vendorId: data.vendorId,
        amount,
      };

      mutate({ id, data: updatedData, headers });
    }
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      color: 'primary',
      clickHandler: saveHandler,
      isLoading: isMutating,
    },
  ];

  return isLoading ? <Loader /> : <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Balance" />;
};

export default EditBalanceSheet;
