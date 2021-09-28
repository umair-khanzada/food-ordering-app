import { combineEpics } from 'redux-observable';

// import { fetchCategoriesEpic } from '../../Features/Admin/epics';
import { createCategoryEpic } from '../../Features/Admin/epics';
import { fetchUsersEpic } from '../../Features/Admin/Users/epics';
import { fetchVendorsEpic } from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';
import { addItemEpic, deleteItemEpic } from '../../Features/Vendor/epic';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  // fetchOrdersEpic,
  fetchVendorsEpic,
  fetchUsersEpic,
  createCategoryEpic,

  addItemEpic,

  deleteItemEpic,
);

export default rootEpic;
