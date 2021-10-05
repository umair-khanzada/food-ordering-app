import axios from 'axios';
import { useQuery } from 'react-query';

import { GetHeader } from '../../../scripts/constants';
import { baseUrl } from '../../../scripts/constants';

const Categories = async (headers) => {
  const {
    data: { results },
  } = await axios.get(baseUrl + 'categories', {
    headers,
  });

  return results;
};

export const FetchCategories = () => {
  const { headers } = GetHeader();
  return useQuery('categories', () => Categories(headers));
};
const CategoriesById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + 'categories/' + id, {
    headers,
  });

  return data;
};
export const FetchCategoriesById = (id) => {
  const { headers } = GetHeader();

  return useQuery('categoriesBYId', () => CategoriesById(headers, id));
};
