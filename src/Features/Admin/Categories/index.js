import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteCategory } from './mutation';
import { FetchCategories } from './request';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

function CategoryList() {
  const { headers } = GetHeader();

  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = ({ id }) => {
    history.push({
      pathname: editCategory,
      search: `?id=${id}`,
    });
  };
  const { data: categoriesdata, refetch, isLoading, isFetching } = FetchCategories();

  // useEffect(() => {
  //   if (Array.isArray(categoriesdata)) {
  //     saveCategories(categoriesdata);
  //   }
  // }, [categoriesdata]);

  function deletecategory(categoryId) {
    console.log('categoryId', categoryId);
    mutate({ categoryId, headers });
  }

  const onDelete = (row) => {
    row;
  };

  const [header, setHeader] = useState([]);

  useEffect(() => {
    setHeader(['S.No', 'Categories', 'Edit']);
  }, []);

  const { mutate, mutateAsync, error } = useMutation(deleteCategory, {
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

      {isFetching ? (
        <>{console.log('loader will be here in another branch')}</>
      ) : (
        <>
          <CustomTable
            cellWidth="400px"
            deleteTableRow={deletecategory}
            header={header}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={categoriesdata}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
}

export default CategoryList;
