import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { categoryList } from '../../../Mock/CategoryList';
import { CategoriesTitleContainer, CategoriesTitle, DeleteIcon } from './style';
function CategoryList() {
  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const header = ['Id', 'Category', 'Edit'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={categoryList} tablewidth="50%" />
    </>
  );
}

export default CategoryList;
