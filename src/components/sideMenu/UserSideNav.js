import React from 'react';

import { History, Dashboard, Person, AccountBalanceWalletOutlined } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const UserSideNav = ({ setMobileView }) => {
  const { orderHistories, dashboard, profile, userBalanceSheet } = RouteNames;

  return (
    <>
      <StyledLink icon={<Dashboard />} label="Dashboard" onclick={() => setMobileView(false)} to={dashboard} />

      <StyledLink icon={<Person />} label="Profile" onclick={() => setMobileView(false)} to={profile} />

      <StyledLink icon={<History />} label="Order History" onclick={() => setMobileView(false)} to={orderHistories} />

      <StyledLink
        icon={<AccountBalanceWalletOutlined />}
        label="Balance Sheet"
        onclick={() => setMobileView(false)}
        to={userBalanceSheet}
      />
    </>
  );
};

export default UserSideNav;
