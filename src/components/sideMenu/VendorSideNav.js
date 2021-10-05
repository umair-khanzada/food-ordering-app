import React from 'react';

import { MenuOutlined, Edit, Restaurant } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { orderList, menuList, restaurantList } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />

      <StyledLink icon={<Restaurant />} label="Restaurant" to={restaurantList} />

      <StyledLink icon={<Edit />} label="Order" to={orderList} />
    </>
  );
};

export default VendorSideNav;
