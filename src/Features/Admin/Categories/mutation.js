import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';
export async function category(data) {
  const { category, headers } = data;

  const res = axios.post(
    baseUrl + 'categories',

    category,
    {
      headers,
    },
  );

  return res;
}

export async function deleteCategory(data) {
  const { categoryId, headers } = data;

  const res = axios.delete(`${baseUrl}categories/${categoryId}`, {
    headers,
  });

  return res;
}

export async function updateCategoryById(data) {
  const {
    category,
    categoriesId: { id },
    headers,
  } = data;

  const res = axios.patch(`${baseUrl}categories/${id}`, category, {
    headers,
  });

  return res;
}
