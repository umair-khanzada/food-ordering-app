import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import uiReducer from '../../components/AlertMessage/alertRedux/redux';
import { loaderReducer } from '../../components/Loader/ducks';
import { modalReducer } from '../../components/Modal/ducks';
import { forgotPassword, responseMessage, authReducer } from '../../Features/Auth/ducks';
import { addtocartReducers, cartItemReducer } from '../../Features/Customer/ducks';

const persistConfig = {
  blacklist: ['forgotPassword', 'loaderReducer', 'modalReducer', 'responseMessage', 'uiReducer', 'authReducer'],
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const authPersistConfig = {
  key: 'authReducer',
  storage,
  blacklist: ['isLoading'],
};

const reducer = combineReducers({
  forgotPassword,
  responseMessage,
  authReducer: persistReducer(authPersistConfig, authReducer),
  addtocartReducers,
  modalReducer,
  uiReducer,
  loaderReducer,
  cartItemReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
