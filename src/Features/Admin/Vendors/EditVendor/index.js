import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Snackbar from '../../../../components/AlertMessage';
import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex, ERROR, GetHeader, SUCCCESS, passwordRegex } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { editUserById } from '../../Common Requests/mutation';
import { FetchUserById } from '../../Common Requests/request';

const EditVendor = () => {
  const { headers } = GetHeader();
  const successMessage = 'Successfull vendor has been edited';
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['user', 'vendor'],
      value: [],
      name: 'role',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: '',
      name: 'name',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      value: '',
      name: 'email',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!emailRegex.test(value)) {
          return 'Email type is not valid';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: '',
      name: 'password',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!passwordRegex.test(value)) {
          return ['Password must be 8 characters long and contains atleast one number and letter', false];
        }
        return ['', true];
      },
    },

    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: '',
      name: 'contact',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!contactRegex.test(value)) {
          return 'Contact length or Type is not valid';
        }
        return '';
      },
    },
  ]);
  const { isLoading, isSuccess, isError, mutateAsync } = useMutation(editUserById, {
    onSuccess: () => {
      const resetFields = fields.map((field) => {
        return {
          ...field,
          value: '',
        };
      });
      setFields(resetFields);
      dispatch(toggleSnackbarOpen(successMessage));
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      dispatch(toggleSnackbarOpen(message));
    },
  });
  const [vendor, setVendor] = useState('');

  const { data: vendorById, isFetching } = FetchUserById(id);

  useEffect(() => {
    if (vendorById !== undefined) {
      setVendor(vendorById);
      fields.map((field) => {
        field.value = vendorById[field.name];
      });
      setFields(fields);
    }
  }, [vendorById]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);

    if (isValid) {
      const userData = {};
      fields.map(({ name, value }) => {
        userData[name] = value;
      });

      mutateAsync({ id, headers, userData });
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
        <>
          <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Vendor" onSaveSuccess={isSuccess} />
          {isSuccess && <Snackbar type={SUCCCESS} />}
          {isError && <Snackbar type={ERROR} />}
        </>
      )}
    </>
  );
};

export default EditVendor;
