import React from 'react';

import { History, Dashboard, Person } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import { StyledIcon, StyledLink } from './style';
const UserSideNav = () => {
  const { orderHistories, dashboard, profile } = RouteNames;

  return (
    <>
      <StyledLink to={dashboard}>
        <StyledIcon>
          <Dashboard />
        </StyledIcon>
        Dashboard
      </StyledLink>

      <StyledLink to={profile}>
        <StyledIcon>
          <Person />
        </StyledIcon>
        Profile
      </StyledLink>

      <StyledLink to={orderHistories}>
        <StyledIcon>
          <History />
        </StyledIcon>
        Order History
      </StyledLink>
    </>
  );
};

export default UserSideNav;
