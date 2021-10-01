import { combineEpics } from 'redux-observable';

import { loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic } from '../../Features/Auth/epics';
import { editUserEpic } from '../../Features/Customer/epics';

const rootEpic = combineEpics(loginEpic, logoutEpic, signUpEpic, forgotPasswordEpic, loginSuccessEpic, editUserEpic);

export default rootEpic;
