import React from 'react';

import { PeopleAlt, Category } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';
const AdminSideNav = ({ setMobileView }) => {
  const { users, vendors, categories } = RouteNames;
  return (
    <>
      <StyledLink icon={<PeopleAlt />} label="Vendors" onclick={() => setMobileView(false)} to={vendors} />
      <StyledLink icon={<PeopleAlt />} label="Users" onclick={() => setMobileView(false)} to={users} />
      <StyledLink icon={<Category />} label="Category" onclick={() => setMobileView(false)} to={categories} />
    </>
  );
};

export default AdminSideNav;
