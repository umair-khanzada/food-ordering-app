import React from 'react';

import { MenuOutlined, Category, Edit } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import { StyledIcon, StyledLink } from './style';

const VendorSideNav = () => {
  const { categoryList, orderList, menuList } = RouteNames;

  return (
    <>
      <StyledLink to={menuList}>
        <StyledIcon>
          <MenuOutlined />
        </StyledIcon>
        Menu
      </StyledLink>

      <StyledLink to={categoryList}>
        <StyledIcon>
          <Category />
        </StyledIcon>
        Category
      </StyledLink>

      <StyledLink to={orderList}>
        <StyledIcon>
          <Edit />
        </StyledIcon>
        Order
      </StyledLink>
    </>
  );
};

export default VendorSideNav;
