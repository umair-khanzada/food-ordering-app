import { combineEpics } from 'redux-observable';

import {
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  loginSuccessEpic,
  resetPasswordEpic,
} from '../../Features/Auth/epics';
import { editUserEpic } from '../../Features/Customer/epics';

const rootEpic = combineEpics(
  loginEpic,
  logoutEpic,
  signUpEpic,
  forgotPasswordEpic,
  loginSuccessEpic,
  resetPasswordEpic,
  editUserEpic,
);

export default rootEpic;
