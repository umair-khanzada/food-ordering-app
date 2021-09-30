import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { AuthToken, GetHeader } from '../../../scripts/constants';
import { deleteCategory } from './mutation';
import { FetchCategories } from './request';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

function CategoryList() {
  const { headers } = GetHeader();
  const token = AuthToken();
  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = ({ id }) => {
    history.push({
      pathname: editCategory,
      search: `?id=${id}`,
    });
  };
  const [categories, setCategories] = useState([]);
  const { data: categoriesdata, refetch } = FetchCategories();

  useEffect(() => {
    if (Array.isArray(categoriesdata)) {
      saveCategories(categoriesdata);
    }
  }, [categoriesdata]);
  const saveCategories = (results) => {
    setCategories(results);
  };
  function deletecategory(categoryId) {
    mutate({ categoryId, headers });
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
        deleteTableRow={deletecategory}
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
