// export * as Epics from './login-logout';
import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic } from '../../Features/Auth/epics';
import { updateUserEpic } from '../../Features/Customer/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic, updateUserEpic);

export default rootEpic;
