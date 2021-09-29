import { combineEpics } from 'redux-observable';

import {
  createVendoEpic,
  deleteVendorByIdEpic,
  fetchVendorByIdEpic,
  fetchVendorsEpic,
  updateVendorByIdEpic,
} from '../../Features/Admin/Vendors/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  loginSuccessEpic,
  forgotPasswordEpic,
  fetchVendorsEpic,
  fetchVendorByIdEpic,
  updateVendorByIdEpic,
  deleteVendorByIdEpic,
  createVendoEpic,
);

export default rootEpic;
