// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic } from './login-logout';

const rootEpic = combineEpics(loginEpic, logoutEpic);

export default rootEpic;
