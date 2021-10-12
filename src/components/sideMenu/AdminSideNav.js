import React from 'react';

import { PeopleAlt, Category } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';
const AdminSideNav = () => {
  const { users, vendors, categories } = RouteNames;

  return (
    <>
      <StyledLink icon={<PeopleAlt />} label="Vendors" to={vendors} />
      <StyledLink icon={<PeopleAlt />} label="Users" to={users} />
      <StyledLink icon={<Category />} label="Category" to={categories} />
    </>
  );
};

export default AdminSideNav;
