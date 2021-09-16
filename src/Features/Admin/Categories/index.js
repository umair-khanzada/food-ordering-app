import React from 'react';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { categoryList } from '../../../Mock/CategoryList';
import { CategoriesTitleContainer, CategoriesTitle } from './style';
function CategoryList() {
  const header = ['Id', 'Category', 'Edit'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable cellWidth="400px" header={header} isEditDelete rows={categoryList} tablewidth="90%" />
    </>
  );
}

export default CategoryList;
