import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import { LOGIN, LOGOUT } from '../scripts/constants';

const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGOUT),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: LOGIN }),
  );
export default loginEpic;
