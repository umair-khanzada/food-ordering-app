// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';
import loginEpic from './login-logout';

const rootEpic = combineEpics(loginEpic);

export default rootEpic;
