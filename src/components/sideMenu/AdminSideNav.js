import React from 'react';

import { PeopleAlt, Category } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';
const AdminSideNav = ({ drawerToggle }) => {
  const { users, vendors, categories } = RouteNames;
  return (
    <>
      <StyledLink icon={<PeopleAlt />} label="Vendors" onclick={() => drawerToggle(false)} to={vendors} />
      <StyledLink icon={<PeopleAlt />} label="Users" onclick={() => drawerToggle(false)} to={users} />
      <StyledLink icon={<Category />} label="Category" onclick={() => drawerToggle(false)} to={categories} />
    </>
  );
};

export default AdminSideNav;
