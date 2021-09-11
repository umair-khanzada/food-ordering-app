import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP } from '../../redux/ActionTypes';
import { loginSuccess, loginError, formMessage, logoutSuccess } from './actions';

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
          const { user, tokens } = res.response;
          const { name } = user;
          const { refresh, access } = tokens;
          return of(
            loginSuccess({
              name,
              refreshToken: refresh,
              accessToken: access,
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
          const { user, tokens } = res.response;
          const { name } = user;
          const { refresh, access } = tokens;
          return of(
            loginSuccess({
              name,
              refreshToken: refresh,
              accessToken: access,
            }),
          );
        }),
        catchError(() => {
          return of(loginError());
        }),
      );
    }),
  );

export const forgotPasswordEpic = (action$) =>
  action$.pipe(
    ofType(FORGOT_PASSWORD),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:4000/v1/auth/forgot-password',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          const {
            response: { message },
            status,
          } = res;
          return of(formMessage({ message, status }));
        }),
        catchError((err) => {
          const {
            response: { message },
            status,
          } = err;

          return of(formMessage({ message, status }));
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
