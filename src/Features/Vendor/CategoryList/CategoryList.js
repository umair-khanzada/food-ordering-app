import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import CategoryData from '../../../Mock/CategoryListData';
import { CategoriesTitleContainer } from './Style';

function CategoryList() {
  const History = useHistory();

  const header = ['No', 'Category', 'Edit'];

  return (
    <>
      <CategoriesTitleContainer>
        <CommonButton onClick={() => History.push('/addcategory')} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable cellWidth="30%" header={header} isEditDelete rows={CategoryData} tablewidth="90%" />
    </>
  );
}

export default CategoryList;
