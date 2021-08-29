import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Actions } from '../actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(Actions.LOGIN),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: Actions.LOGOUT }),
  );
