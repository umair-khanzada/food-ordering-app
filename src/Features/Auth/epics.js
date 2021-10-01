import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP, LOGIN_SUCCESS } from '../../redux/ActionTypes';
import { defaultRouteForRoles } from '../../scripts/constants';
import { loginSuccess, logoutError, logoutSuccess, setFormMessage } from './actions';
export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload: { userData, history } }) => {
      return ajax({
        url: 'http://localhost:4000/v1/auth/login',
        method: 'POST',
        body: userData,
      }).pipe(
        mergeMap((res) => {
          const {
            user: { name, email, role, id, contact },
            tokens: { refresh, access },
          } = res.response;
          return of(
            loginSuccess({
              id,
              name,
              email,
              role,
              contact,
              refreshToken: refresh,
              accessToken: access,
              history,
            }),
          );
        }),
        catchError((err) => {
          const {
            response: { message },
            status,
          } = err;
          return of(setFormMessage({ message, status }));
        }),
      );
    }),
  );
export const loginSuccessEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_SUCCESS),
    mergeMap(({ payload: { role, history } }) => {
      const defaultRouteAfterLogin = defaultRouteForRoles[role];
      history.push(defaultRouteAfterLogin || '/');
      return of();
    }),
  );
export const signUpEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP),
    mergeMap(({ payload: { userData, history } }) => {
      return ajax({
        url: 'http://localhost:4000/v1/auth/register',
        method: 'POST',
        body: userData,
      }).pipe(
        mergeMap((res) => {
          const {
            user: { name, email, role, id, contact },
            tokens: { refresh, access },
          } = res.response;
          return of(
            loginSuccess({
              id,
              name,
              email,
              role,
              contact,
              refreshToken: refresh,
              accessToken: access,
              history,
            }),
          );
        }),
        catchError((err) => {
          const {
            response: { message },
            status,
          } = err;
          return of(setFormMessage({ message, status }));
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
          return of(setFormMessage({ message, status }));
        }),
        catchError((err) => {
          const {
            response: { message },
            status,
          } = err;
          return of(setFormMessage({ message, status }));
        }),
      );
    }),
  );
export const logoutEpic = (action$, state) =>
  action$.pipe(
    ofType(LOGOUT),
    mergeMap(({ payload: { history } }) => {
      const {
        value: {
          authReducer: {
            refreshToken: { token },
          },
        },
      } = state;
      return ajax({
        url: 'http://localhost:4000/v1/auth/logout',
        method: 'POST',
        body: { refreshToken: token },
      }).pipe(
        mergeMap(() => {
          history.push('/login');
          return of(logoutSuccess());
        }),
        catchError(() => {
          return of(logoutError());
        }),
      );
    }),
  );
