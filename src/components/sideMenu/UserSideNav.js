import React from 'react';

import { History, Dashboard, Person } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const UserSideNav = () => {
  const { orderHistories, dashboard, profile } = RouteNames;

  return (
    <>
      <StyledLink icon={<Dashboard />} label="Dashboard" to={dashboard} />

      <StyledLink icon={<Person />} label="Profile" to={profile} />

      <StyledLink icon={<History />} label="Order History" to={orderHistories} />
    </>
  );
};

export default UserSideNav;
