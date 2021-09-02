import { ofType } from 'redux-observable';
import { ignoreElements } from 'rxjs/operators';

import { LOGIN, LOGOUT } from '../scripts/constants';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    // delay(1000), // Asynchronously wait 1000ms then continue
    // mapTo({ type: LOGIN }),
    ignoreElements(),
  );

export const logoutEpic = (action$) =>
  action$.pipe(
    ofType(LOGOUT),
    // delay(1000), // Asynchronously wait 1000ms then continue
    // mapTo({ type: LOGOUT }),
    ignoreElements(),
  );
