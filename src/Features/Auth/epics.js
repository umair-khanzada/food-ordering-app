import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, ignoreElements } from 'rxjs/operators';

import { LOGIN, LOGOUT, SIGNUP } from '../../scripts/constants';
import { loginSuccess, loginError } from './actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload }) => {
      console.log('payload', payload);
      return ajax({
        url: 'http://localhost:4000/v1/auth/login',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          console.log(res);
          return of(loginSuccess());
        }),
        catchError(() => {
          return of(loginError());
        }),
      );
    }),
  );

export const signUpEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP),
    mergeMap(({ payload }) => {
      console.log('payload signup', payload);
      return ajax({
        url: 'http://localhost:4000/v1/auth/register',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          console.log(res);
          return of(loginSuccess());
        }),
        catchError((err) => {
          console.log(err);
          return of(loginError());
        }),
      );
    }),
  );

export const logoutEpic = (action$) => action$.pipe(ofType(LOGOUT), ignoreElements());
