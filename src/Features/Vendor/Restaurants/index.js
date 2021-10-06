import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteRestaurant } from './mutation';
import { FetchRestaurants } from './request';
// import { deleteCategory } from './mutation';
// import { FetchCategories } from './request';
import { RestaurantsTitleContainer, RestaurantsTitle } from './style';

function RestaurantList() {
  const { headers } = GetHeader();

  const { restaurant, editRestaurant } = RouteNames;
  const history = useHistory();
  const onEdit = ({ id: restaurantId }) => {
    history.push({
      pathname: editRestaurant,
      search: `?id=${restaurantId}`,
    });
  };

  const { data: restaurantsData, refetch, isFetching } = FetchRestaurants();

  const onDelete = ({ id: restaurantId }) => {
    mutate({ restaurantId, headers });
  };

  const [header, setHeader] = useState([]);

  useEffect(() => {
    setHeader(['S.No', 'Restaurant', 'Edit']);
  }, []);

  const { isLoading, mutate } = useMutation(deleteRestaurant, {
    onSuccess: (response) => {
      refetch();

      return response;
    },
  });
  return (
    <>
      <RestaurantsTitleContainer>
        <RestaurantsTitle>Restaurant</RestaurantsTitle>
        <CommonButton onClick={() => history.push(restaurant)} property="Add Restaurant" />
      </RestaurantsTitleContainer>

      {isFetching ? (
        <Loader />
      ) : (
        <>
          <CustomTable
            cellWidth="400px"
            header={header}
            isDeleting={isLoading}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={restaurantsData}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
}

export default RestaurantList;
