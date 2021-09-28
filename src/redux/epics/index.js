import { combineEpics } from 'redux-observable';

// import { fetchCategoriesEpic } from '../../Features/Admin/epics';

import { fetchUsersEpic } from '../../Features/Admin/Users/epics';
import { fetchVendorsEpic } from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  // fetchOrdersEpic,
  fetchVendorsEpic,
  fetchUsersEpic,
);

export default rootEpic;
