import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { CategoriesTitleContainer, CategoriesTitle, DeleteIcon } from './Style';

export const categoryList = [
  {
    No: 1,

    category: 'greavy',
  },

  {
    No: 2,

    category: 'bread',
  },

  {
    No: 3,

    category: 'rice',
  },

  {
    No: 4,

    category: 'roll',
  },

  {
    No: 5,

    category: 'burger',
  },
];

function CategoryList() {
  const History = useHistory();
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

  const header = ['No', 'Category'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>

        <CommonButton onClick={() => History.push('/addcategory')} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable cellWidth="400px" header={header} rows={categoryList} tablewidth="80%" />
    </>
  );
}

export default CategoryList;
