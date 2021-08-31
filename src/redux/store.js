import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import reducer from './reducers';
const epicMiddleware = createEpicMiddleware();
export default createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
