import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
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
  const [categories, setCategories] = useState([]);
  const { data: categoriesdata, refetch } = FetchCategories();

  useEffect(() => {
    if (categoriesdata !== undefined) {
      saveCategories(categoriesdata);
    }
  }, [categoriesdata]);

  const saveCategories = ({ data: { results } }) => {
    console.log('resultsCategories', results);
    setCategories(results);
  };
  function deleteItem(categoryId) {
    mutate({ id: categoryId, token });
  }

  const onDelete = (row) => {
    row;
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

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

      <CustomTable
        cellWidth="400px"
        deleteTableRow={deleteItem}
        header={header}
        isEditDelete
        onDelete={onDelete}
        onEdit={onEdit}
        rows={categories}
        tablewidth="90%"
      />
    </>
  );
}

export default CategoryList;
