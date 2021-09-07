import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, ignoreElements } from 'rxjs/operators';

import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP } from '../../scripts/constants';
import { loginSuccess, loginError } from './actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap((action) => {
      console.log('pwoeri');

      return ajax.getJSON('http://localhost:5000/users').pipe(
        mergeMap((res) => {
          console.log('qweqw');
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

export const forgotPasswordEpic = (action$) =>
  action$.pipe(
    ofType(FORGOT_PASSWORD),
    mergeMap(({ payload }) => {
      console.log('chal ja ');
      return ajax({
        url: 'http://localhost:4000/v1/auth/forgot-password',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          console.log(res);
          ignoreElements();
          // return of(loginSuccess({ name: res.response.user.name, token: res.response.tokens.access }));
        }),
        catchError(() => {
          ignoreElements();
          // return of(loginError());
        }),
      );
    }),
  );
export const logoutEpic = (action$) => action$.pipe(ofType(LOGOUT), ignoreElements());
