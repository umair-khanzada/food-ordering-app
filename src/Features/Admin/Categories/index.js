/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { AuthToken } from '../../../scripts/constants';
import { deleteCategory } from '../mutation';
import { FetchCategories } from '../request';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

function CategoryList() {
  const token = AuthToken();
  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = (row) => {
    history.push({
      pathname: editCategory,
      state: { data: row },
    });
  };
  const { data: categoriesdata, refetch } = FetchCategories();

  useEffect(() => {
    console.log('useEffect');
    console.log('queryData', categoriesdata);
    if (categoriesdata !== undefined) {
      saveCategories(categoriesdata);
    }
  }, [categoriesdata]);

  const saveCategories = ({ data: { results } }) => {
    console.log('resultsCategories', results);
  };
  function deleteItem(categoryId) {
    mutate({ id: categoryId, token });
  }

  const onDelete = (row) => {
    row;
  };

  const [header, setHeader] = useState([]);

  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

  const { mutate, mutateAsync, isLoading, error } = useMutation(deleteCategory, {
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
      {console.log('categoriesData', categoriesdata)}

      {categoriesdata !== undefined && (
        <CustomTable
          cellWidth="400px"
          deleteTableRow={deleteItem}
          header={header}
          isEditDelete
          onDelete={onDelete}
          onEdit={onEdit}
          rows={categoriesdata.data.results}
          tablewidth="90%"
        />
      )}
    </>
  );
}

export default CategoryList;
