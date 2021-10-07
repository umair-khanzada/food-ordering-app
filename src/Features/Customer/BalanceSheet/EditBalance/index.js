import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { PRICE } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { fieldChangeHandler, validateOnSubmit } from '../../../../util/CommonGridBasedFormUtils';
// import { EditBalanceById } from '../mutation';
import { FetchBalanceById } from '../request';

const EditUserBalanceSheet = () => {
  const history = useHistory();

  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');

  // const { mutate, isSuccess, isLoading: isMutating } = EditBalanceById();

  const { isLoading, data, isSuccess } = FetchBalanceById(id);
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
    if (data?.amount) {
      fields[0].value = data.amount;
      setFields(fields);
    }
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

      // mutate({ id, data: updatedData });
    }
  };

  const buttons = [
    {
      type: 'button',
      name: 'save',
      minWidth: '100%',
      color: 'primary',
      clickHandler: saveHandler,
    },
  ];

  return isLoading ? (
    <Loader />
  ) : (
    <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Balance" onSaveSuccess={isSuccess} />
  );
};

export default EditUserBalanceSheet;
