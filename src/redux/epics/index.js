// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { createCategoryEpic } from '../../Features/Admin/epics';
import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, createCategoryEpic);

export default rootEpic;
