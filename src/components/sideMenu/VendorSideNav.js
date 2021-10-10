import React from 'react';

import { MenuOutlined, Edit, AccountBalanceWallet, Restaurant } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { categoryList, orderList, menuList, balanceSheet, restaurantList } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />

      <StyledLink icon={<Restaurant />} label="Restaurant" to={restaurantList} />

      <StyledLink icon={<Edit />} label="Order" to={orderList} />

      <StyledLink icon={<AccountBalanceWallet />} label="Balance Sheet" to={balanceSheet} />
    </>
  );
};

export default VendorSideNav;
