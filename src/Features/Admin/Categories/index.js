import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { ERROR, GetHeader, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteCategory } from './mutation';
import { FetchCategories } from './request';
import { CategoriesTitleContainer, CategoriesTitle, CustomTableContainer } from './style';

function CategoryList() {
  const { headers } = GetHeader();

  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = ({ id: categoryId }) => {
    history.push({
      pathname: editCategory,
      search: `?id=${categoryId}`,
    });
  };
  const { data: categoriesData, refetch, isFetching } = FetchCategories();

  const onDelete = ({ id: categoryId }) => {
    mutate({ categoryId, headers });
  };

  const [header, setHeader] = useState([]);
  const successMessage = 'Successfull user has been deleted';
  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation(deleteCategory, {
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
    onSuccess: () => {
      refetch();
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
    },
  });
  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

      {isFetching ? (
        <Loader />
      ) : (
        <CustomTableContainer>
          <CustomTable
            cellWidth="400px"
            header={header}
            isDeleting={isLoading}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={categoriesData}
            tablewidth="90%"
          />
        </CustomTableContainer>
      )}
    </>
  );
}

export default CategoryList;
