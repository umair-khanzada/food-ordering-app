import React from 'react';

import { MenuOutlined, Edit, AccountBalanceWallet, Person } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { orderList, vendorProfile, menuList, balanceSheet } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />
      <StyledLink icon={<Edit />} label="Order" to={orderList} />
      <StyledLink icon={<Person />} label="Profile" to={vendorProfile} />
      <StyledLink icon={<AccountBalanceWallet />} label="Balance Sheet" to={balanceSheet} />
    </>
  );
};

export default VendorSideNav;
