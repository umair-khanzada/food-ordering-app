// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { fetchVendorByIdEpic, fetchVendorsEpic } from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  fetchVendorsEpic,
  fetchVendorByIdEpic,
);

export default rootEpic;
