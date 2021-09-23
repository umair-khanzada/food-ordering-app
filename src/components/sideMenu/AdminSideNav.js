import React from 'react';

import { History, PeopleAlt, Category } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import { StyledLink, StyledIcon } from './style';
const AdminSideNav = () => {
  const { orderHistory, users, vendors, categories } = RouteNames;

  return (
    <>
      <StyledLink to={orderHistory}>
        <StyledIcon>
          <History />
        </StyledIcon>
        Order History
      </StyledLink>
      <StyledLink to={vendors}>
        <StyledIcon>
          <PeopleAlt />
        </StyledIcon>
        Vendors
      </StyledLink>
      <StyledLink to={users}>
        <StyledIcon>
          <PeopleAlt />
        </StyledIcon>
        Users
      </StyledLink>
      <StyledLink to={categories}>
        <StyledIcon>
          <Category />
        </StyledIcon>
        Category
      </StyledLink>{' '}
    </>
  );
};

export default AdminSideNav;
