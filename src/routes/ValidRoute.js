import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router';

import VendorList from '../Features/Admin/Vendors';
import LoginForm from '../Features/Auth/Login/LoginContainer';
import Dashboard from '../Features/Customer/Dashboard';
import MenuList from '../Features/Vendor/Menu';
import { isProtectedRoute, isPublicRoute } from './Permission';

const ValidRoute = ({ route, authorizedRole }) => {
  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  }, shallowEqual);

  const { component: Component, permissions } = route;

  if (!authorizedRole && Boolean(!isLoggedIn) && permissions === isPublicRoute) return <Component />;
  if (!authorizedRole && Boolean(isLoggedIn) && permissions === isProtectedRoute) return <Component />;
  if (Boolean(isLoggedIn) && role === authorizedRole) return <Component />;
  if (role === 'user') {
    return <Redirect to={<Dashboard />} />;
  }
  if (role === 'vendor') return <Redirect to={<MenuList />} />;
  if (role === 'admin') return <Redirect to={<VendorList />} />;
  return <Redirect to={<LoginForm />} />;
};

export default ValidRoute;
