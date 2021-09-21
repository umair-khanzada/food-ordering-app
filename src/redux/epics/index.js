import { combineEpics } from 'redux-observable';

import { fetchCategoriesEpic } from '../../Features/Admin/Categories/epics';
import { fetchOrdersEpic } from '../../Features/Admin/OrderHistory/epics';
import { fetchUsersEpic } from '../../Features/Admin/Users/epics';
import { fetchVendorsEpic } from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  fetchOrdersEpic,
  fetchVendorsEpic,
  fetchUsersEpic,
  fetchCategoriesEpic,
);

export default rootEpic;
