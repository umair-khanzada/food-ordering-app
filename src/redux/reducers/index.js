import { combineReducers } from 'redux';

import addtocartReducers from '../../Features/DashBoard/redux/reducer/index';
import { loginLogout } from './login-logout';

const reducer = combineReducers({
  login_logout: loginLogout,
  addtocartReducers,
});

export default reducer;
