import React from 'react';

import { MenuOutlined, Edit, AccountBalanceWallet, Restaurant, Person } from '@material-ui/icons';

import RouteNames from '../../routes/RouteNames';
import StyledLink from '../ReactRouterStyledLink';

const VendorSideNav = ({ setMobileView }) => {
  const { orderList, vendorProfile, menuList, balanceSheet, restaurantList } = RouteNames;

  return (
    <>
      <StyledLink icon={<MenuOutlined />} label="Menu" onclick={() => setMobileView(false)} to={menuList} />

      <StyledLink icon={<Restaurant />} label="Restaurant" onclick={() => setMobileView(false)} to={restaurantList} />

      <StyledLink icon={<Edit />} label="Order" onclick={() => setMobileView(false)} to={orderList} />
      <StyledLink icon={<Person />} label="Profile" onclick={() => setMobileView(false)} to={vendorProfile} />
      <StyledLink
        icon={<AccountBalanceWallet />}
        label="Balance Sheet"
        onclick={() => setMobileView(false)}
        to={balanceSheet}
      />
    </>
  );
};

export default VendorSideNav;
