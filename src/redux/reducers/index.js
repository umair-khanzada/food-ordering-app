import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import addtocartReducers from '../../Features/DashBoard/redux/reducer/index';
import { loginLogout } from './login-logout';

const reducer = combineReducers({
  login_logout: loginLogout,
  addtocartReducers,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
