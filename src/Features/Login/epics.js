import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, ignoreElements } from 'rxjs/operators';

import { LOGIN, LOGOUT } from '../../scripts/constants';
import { loginSuccess, loginError } from './actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap((action) => {
      return ajax.getJSON('http://localhost:5000/users').pipe(
        mergeMap((res) => {
          return of(loginSuccess());
        }),
        catchError(() => {
          return of(loginError());
        }),
      );
    }),
  );

export const logoutEpic = (action$) => action$.pipe(ofType(LOGOUT), ignoreElements());
