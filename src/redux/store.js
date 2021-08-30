import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';

import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
