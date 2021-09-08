import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { loginReducer, forgotPassword, responseMessage, authReducer } from '../../Features/Auth/ducks';
import { addtocartReducers } from '../../Features/Dashboard/redux/reducer/index';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = combineReducers({
  login_logout: loginReducer,
  addtocartReducers,
  forgotPassword,
  responseMessage,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
