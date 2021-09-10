import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { CategoriesTitleContainer, CategoriesTitle, DeleteIcon } from './Style';

export const categoryList = [
  {
    id: 1,

    category: 'greavy',
  },

  {
    id: 2,

    category: 'bread',
  },

  {
    id: 3,

    category: 'rice',
  },

  {
    id: 4,

    category: 'roll',
  },

  {
    id: 5,

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

  const header = ['Id', 'Category'];

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>

        <CommonButton onClick={() => History.push('/addcategory')} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable header={header} rows={categoryList} tablewidth="50%" />
    </>
  );
}

export default CategoryList;
