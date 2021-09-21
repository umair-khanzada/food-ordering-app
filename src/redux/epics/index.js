// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import {
  deleteUserByIdEpic,
  fetchUserByIdEpic,
  fetchUsersEpic,
  updateUserByIdEpic,
} from '../../Features/Admin/Users/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  fetchUsersEpic,
  fetchUserByIdEpic,
  updateUserByIdEpic,
  deleteUserByIdEpic,
);

export default rootEpic;
