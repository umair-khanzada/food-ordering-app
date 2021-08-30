import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Reducers } from './reducers';
import { Epics } from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(Reducers.loginLogout, applyMiddleware(epicMiddleware));

epicMiddleware.run(Epics.loginEpic);
