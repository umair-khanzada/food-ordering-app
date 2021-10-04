import React from 'react';

import { MenuOutlined, Category, Edit, AccountBalanceWallet } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { categoryList, orderList, menuList, balanceSheet } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />

      <StyledLink icon={<Category />} label="Category" to={categoryList} />

      <StyledLink icon={<Edit />} label="Order" to={orderList} />

      <StyledLink icon={<AccountBalanceWallet />} label="Balance Sheet" to={balanceSheet} />
    </>
  );
};

export default VendorSideNav;
