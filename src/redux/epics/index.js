import { combineEpics } from 'redux-observable';

// import { fetchCategoriesEpic } from '../../Features/Admin/epics';
import { createCategoryEpic } from '../../Features/Admin/epics';
import { fetchUsersEpic } from '../../Features/Admin/Users/epics';
import { fetchVendorsEpic } from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';
import addRestaurantEpic from '../../Features/Vendor/epic';
import { fetchRestaurantEpic, fetchCategoriesEpic, addItemEpic } from '../../Features/Vendor/epic';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  // fetchOrdersEpic,
  fetchVendorsEpic,
  fetchUsersEpic,
  fetchCategoriesEpic,
  addRestaurantEpic,
  createCategoryEpic,
  fetchRestaurantEpic,
  addItemEpic,
);

export default rootEpic;
