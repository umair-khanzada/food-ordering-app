import React, { useState } from 'react';
import { useEffect } from 'react';

import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../../components/AlertMessage/alertRedux/actions';
import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../../components/Loader';
import { ERROR, GetHeader, SUCCESS } from '../../../../scripts/constants';
import { validateOnSubmit, fieldChangeHandler } from '../../../../util/CommonGridBasedFormUtils';
import { logout } from '../../../Auth/actions';
import { updateCategoryById } from '../mutation';
import { FetchCategoriesById } from '../request';

const EditCategory = () => {
  const { headers } = GetHeader();
  const adminId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const successMessage = 'Successfull category has been updated';
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const id = params.get('id');
  const { data: categoriesId, isFetching } = FetchCategoriesById(id);

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation(updateCategoryById, {
    onSuccess: () => {
      setFields(initialCategoriesEditField);
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
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

  useEffect(() => {
    if (categoriesId !== undefined) {
      saveCategoriesId(categoriesId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesId]);

  const saveCategoriesId = (categoriesId) => {
    const { name } = categoriesId;
    const updatedFields = fieldChangeHandler(fields, name, 0);
    setFields(updatedFields);
    // setCategoriesId(name);
  };
  const initialCategoriesEditField = [
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Category Name',
      variant: 'standard',
      value: '',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
    },
  ];
  const [fields, setFields] = useState(initialCategoriesEditField);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields, true);
    setFields(validateArray);

    if (isValid) {
      const name = fields.map(({ value }) => value);
      mutate({
        category: {
          name: name[0],
          createdBy: adminId,
        },
        headers,
        categoriesId,
      });
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
    <>{isFetching ? <Loader /> : <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Category" />}</>
  );
};

export default EditCategory;
