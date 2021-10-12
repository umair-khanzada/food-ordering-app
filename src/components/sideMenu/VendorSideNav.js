import React from 'react';

import { MenuOutlined, Edit, AccountBalanceWallet, Restaurant, Person } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { orderList, vendorProfile, menuList, balanceSheet, restaurantList } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />

      <StyledLink icon={<Restaurant />} label="Restaurant" to={restaurantList} />

      <StyledLink icon={<Edit />} label="Order" to={orderList} />
      <StyledLink icon={<Person />} label="Profile" to={vendorProfile} />
      <StyledLink icon={<AccountBalanceWallet />} label="Balance Sheet" to={balanceSheet} />
    </>
  );
};

export default VendorSideNav;
