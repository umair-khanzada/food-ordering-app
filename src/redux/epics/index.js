// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { fetchUsersEpic } from '../../Features/Admin/Users/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, fetchUsersEpic);

export default rootEpic;
