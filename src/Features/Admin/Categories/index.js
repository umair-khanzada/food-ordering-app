import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteCategory } from './mutation';
import { FetchCategories } from './request';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

function CategoryList() {
  const [status, setStatus] = useState(0);
  const fetching = 204;
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

  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

  const { isLoading, mutate } = useMutation(deleteCategory, {
    onSuccess: (response) => {
      refetch();
      console.log('resposne', response);
      setStatus(response.status);
      // fetching = false;
      // getResponse(response);
      return response;
    },
  });
  const getResponse = ({ status }) => {
    return status;
  };
  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

      {isFetching && status === 0 ? (
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
