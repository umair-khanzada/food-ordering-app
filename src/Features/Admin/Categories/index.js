import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { categoryList } from '../../../Mock/CategoryList';
import RouteNames from '../../../routes/RouteNames';
import { CategoriesTitleContainer, CategoriesTitle } from './style';

function CategoryList() {
  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  ``;
  const onEdit = (row) => {
    history.push({
      pathname: editCategory,
      state: { data: row },
    });
  };

  const header = ['No', 'Category', 'Edit'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable header={header} isEditDelete onEdit={onEdit} rows={categoryList} tablewidth="60%" />
    </>
  );
}

export default CategoryList;
