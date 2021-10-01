import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic } from '../../Features/Auth/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, loginSuccessEpic, signUpEpic, forgotPasswordEpic);

export default rootEpic;
