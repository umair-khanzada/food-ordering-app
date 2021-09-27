import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { FetchCategories } from '../../Vendor/request';
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
  const [categories, setCategories] = useState([]);

  const categoriesData = FetchCategories();
  // saveRestaurant(restaurantsData);
  // saveCategories(categoriesData);
  useEffect(() => {
    if (categoriesData !== undefined) {
      saveCategories(categoriesData);
    }
  }, [categoriesData]);

  const saveCategories = ({ data: { results } }) => {
    console.log('results', results);
    const resData = results.map(({ name }) => ({ name }));
    setCategories(resData);
    console.log(resData);

    // const updatedFields = SelectChangeHandler(fields, resData, 0);

    // setFields(updatedFields);
  };

  const onDelete = (row) => {
    row;
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setHeader(['No', 'Categories', 'Edit']);
  }, []);

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
