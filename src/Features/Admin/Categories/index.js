import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { categoryList } from '../../../Mock/CategoryList';
import { CategoriesTitleContainer, CategoriesTitle } from './style';
function CategoryList() {
  const history = useHistory();
  ``;
  const onEdit = (row) => {
    history.push({
      pathname: '/editcategory',
      state: { data: row },
    });
  };

  const header = ['Id', 'Category', 'Edit'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push('/addcategory')} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable header={header} isEditDelete onEdit={onEdit} rows={categoryList} tablewidth="100%" />
    </>
  );
}

export default CategoryList;
