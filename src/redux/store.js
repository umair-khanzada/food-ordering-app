import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';
import { Epics } from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(Epics.loginEpic);
