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
  const { headers } = GetHeader();

  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = ({ id: categoryId }) => {
    history.push({
      pathname: editCategory,
      search: `?id=${categoryId}`,
    });
  };
<<<<<<< HEAD
  const { data: categoriesData, refetch, isFetching } = FetchCategories();

  const onDelete = ({ id: categoryId }) => {
    mutate({ categoryId, headers });
=======
  const { data: categoriesData, refetch, isLoading } = FetchCategories();
  function deletecategory({ id: categoryId }) {
    mutate({ categoryId, headers });
  }
  const onDelete = (row) => {
    row;
>>>>>>> b4da7a338a7aabc292ceff9805f3377c38975d9c
  };

  const [header, setHeader] = useState([]);

  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

<<<<<<< HEAD
  const { isLoading, mutate } = useMutation(deleteCategory, {
=======
  const { mutate } = useMutation(deleteCategory, {
>>>>>>> b4da7a338a7aabc292ceff9805f3377c38975d9c
    onSuccess: (response) => {
      refetch();

      return response;
    },
  });
  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

<<<<<<< HEAD
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
=======
      {isLoading ? (
        <Loader />
      ) : (
        <CustomTable
          cellWidth="400px"
          deleteTableRow={deletecategory}
          header={header}
          isEditDelete
          onDelete={onDelete}
          onEdit={onEdit}
          rows={categoriesData}
          tablewidth="90%"
        />
>>>>>>> b4da7a338a7aabc292ceff9805f3377c38975d9c
      )}
    </>
  );
}

export default CategoryList;
