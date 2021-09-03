// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic, signUpEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic);

export default rootEpic;
