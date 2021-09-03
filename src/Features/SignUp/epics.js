import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { SIGNUP } from '../../scripts/constants';
import { loginError, loginSuccess } from '../Login';

// implement redux-observable logic here!!

export const signUpEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP),
    mergeMap((action) => {
      console.log(action);
      return ajax.getJSON('http://localhost:5000/users').pipe(
        mergeMap((res) => {
          console.log('res', res);

          return of(loginSuccess());
        }),
        catchError((err) => {
          console.log(err);
          return of(loginError());
        }),
      );
    }),
  );
