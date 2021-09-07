import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import persistedReducer from './reducers';

const epicMiddleware = createEpicMiddleware();
export default createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
