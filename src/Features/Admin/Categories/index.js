import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteCategory } from './mutation';
import { FetchCategories } from './request';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

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

  function deletecategory({ id: categoryId }) {
    mutate({ categoryId, headers });
  }
  const onDelete = ({ id: categoryId }) => {
    mutate({ categoryId, headers });
  };

  const [header, setHeader] = useState([]);

  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation(
    deleteCategory,
    {
      onSuccess: (response) => {
        refetch();

        return response;
      },
    },
    {
      onError: (err) => {
        if (err.response.status === 401) {
          dispatch(logout({ history }));
          dispatch(toggleSnackbarOpen('Session Expired! Please Log in again.'));
        }
      },
    },
  );
  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

      {isFetching ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default CategoryList;
