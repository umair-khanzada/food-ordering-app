import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { LOGIN, LOGOUT, SIGNUP } from '../../redux/ActionTypes';
import { loginSuccess, loginError, logoutSuccess } from './actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:4000/v1/auth/login',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          return of(
            loginSuccess({
              name: res.response.user.name,
              refreshToken: res.response.tokens.refresh,
              accessToken: res.response.tokens.access,
            }),
          );
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
      return ajax({
        url: 'http://localhost:4000/v1/auth/register',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          return of(
            loginSuccess({
              name: res.response.user.name,
              refreshToken: res.response.tokens.refresh,
              accessToken: res.response.tokens.access,
            }),
          );
        }),
        catchError(() => {
          return of(loginError());
        }),
      );
    }),
  );

export const logoutEpic = (action$, state) =>
  action$.pipe(
    ofType(LOGOUT),
    mergeMap(() => {
      const refreshToken = { refreshToken: state.value.authReducer.refreshToken.token };
      return ajax({
        url: 'http://localhost:4000/v1/auth/logout',
        method: 'POST',
        body: refreshToken,
      }).pipe(
        mergeMap(() => {
          return of(logoutSuccess());
        }),
        catchError(() => {
          return of(logoutSuccess());
        }),
      );
    }),
  );
