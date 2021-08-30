import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LOGIN, LOGOUT } from '../../scripts/constants';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: LOGOUT }),
  );
