import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP } from '../../redux/ActionTypes';
import { loginError, formMessage, logoutSuccess, loginSuccess } from './actions';

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:5000/users',
        method: 'GET',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          console.log(payload);
          let found = {};
          res.response.map((user) =>
            user.email === payload.email && user.password === payload.password ? (found = user) : user,
          );
          if (found) {
            return of(loginSuccess(found));
          }
          return of(loginError());

          // loginSuccess({
          //   name: res.response.user.name,
          //   refreshToken: res.response.tokens.refresh,
          //   accessToken: res.response.tokens.access,
          // }),
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
      payload['role'] = 'user';
      console.log(payload);
      return ajax({
        url: 'http://localhost:5000/users',
        method: 'POST',
        body: payload,
      }).pipe(
        mergeMap((res) => {
          return of(loginSuccess(res.response));
          // loginSuccess({
          //   name: res.response.user.name,
          //   refreshToken: res.response.tokens.refresh,
          //   accessToken: res.response.tokens.access,
          // }),
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
      // const refreshToken = { refreshToken: state.value.authReducer.refreshToken.token };
      return ajax({
        url: 'http://localhost:4000/v1/auth/logout',
        method: 'POST',
        // body: refreshToken,
        body: {},
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
