// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic } from '../../Features/Login';
import { signUpEpic } from '../../Features/SignUp';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic);

export default rootEpic;
