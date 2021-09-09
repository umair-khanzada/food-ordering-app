import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { categoryList } from '../../../Mock/CategoryList';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';
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
      <VendorTitleContainer>
        <VendorTitle>Categories</VendorTitle>
        <CommonButton property="Add Category" />
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={categoryList} tablewidth="50%" />
    </>
  );
}

export default CategoryList;
