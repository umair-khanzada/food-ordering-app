import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { fetchCategories } from '../actions';
import { CategoriesTitleContainer, CategoriesTitle } from './style';
function CategoryList() {
  const { addCategory, editCategory } = RouteNames;
  const history = useHistory();
  const onEdit = (row) => {
    history.push({
      pathname: editCategory,
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  const [categories, setCategories] = useState([]);

  const getCategoriesResponseFromEpic = (response) => {
    setCategories(response);
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(getCategoriesResponseFromEpic));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setHeader([...Object.keys(categories[0]), 'Edit']);
    }
  }, [categories]);

  return (
    <>
      <CategoriesTitleContainer>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CommonButton onClick={() => history.push(addCategory)} property="Add Category" />
      </CategoriesTitleContainer>

      <CustomTable
        cellWidth="400px"
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
