import React from 'react';

import { MenuOutlined, Category, Edit } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = () => {
  const { categoryList, orderList, menuList } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" to={menuList} />

      <StyledLink icon={<Category />} label="Category" to={categoryList} />

      <StyledLink icon={<Edit />} label="Order" to={orderList} />
    </>
  );
};

export default VendorSideNav;
