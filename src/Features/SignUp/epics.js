import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { SIGNUP } from '../../scripts/constants';
import { loginError, loginSuccess } from '../Login';

export const signUpEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP),
    mergeMap((action) => {
      return ajax.getJSON('http://localhost:5000/users').pipe(
        mergeMap((res) => {
          return of(loginSuccess());
        }),
        catchError((err) => {
          return of(loginError());
        }),
      );
    }),
  );
