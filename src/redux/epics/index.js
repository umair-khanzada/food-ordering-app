// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import {
  createUserEpic,
  deleteUserByIdEpic,
  fetchUserByIdEpic,
  updateUserByIdEpic,
} from '../../Features/Admin/Users/epics';
import {
  createVendoEpic,
  deleteVendorByIdEpic,
  fetchVendorByIdEpic,
  fetchVendorsEpic,
  updateVendorByIdEpic,
} from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  fetchVendorsEpic,
  fetchVendorByIdEpic,
  updateVendorByIdEpic,
  deleteVendorByIdEpic,
  createVendoEpic,

  fetchUserByIdEpic,
  updateUserByIdEpic,
  deleteUserByIdEpic,
  createUserEpic,
);

export default rootEpic;
