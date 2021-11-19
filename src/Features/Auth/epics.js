import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP, LOGIN_SUCCESS, RESET_PASSWORD } from '../../redux/ActionTypes';
import { defaultRouteForRoles, baseUrl } from '../../scripts/constants';
import { clearCart } from '../Customer/actions';
import { loginError, loginSuccess, logoutError, logoutSuccess, setFormMessage } from './actions';
export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload: { userData, history } }) => {
      return ajax({
        url: `${baseUrl}auth/login`,
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

          console.log(message, 'message');
          return concat(of(setFormMessage({ message, status })), of(loginError()));
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
        url: `${baseUrl}auth/register`,
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
          return concat(of(setFormMessage({ message, status })), of(loginError()));
        }),
      );
    }),
  );
export const forgotPasswordEpic = (action$) =>
  action$.pipe(
    ofType(FORGOT_PASSWORD),
    mergeMap(({ payload }) => {
      return ajax({
        url: `${baseUrl}auth/forgot-password`,
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
            role,
          },
        },
      } = state;

      return ajax({
        url: `${baseUrl}auth/logout`,
        method: 'POST',
        body: { refreshToken: token },
      }).pipe(
        mergeMap(() => {
          localStorage.removeItem('persist:authReducer');
          localStorage.removeItem('persist:root');
          history.push('/login');
          if (role === 'user') {
            return concat(of(clearCart()), of(logoutSuccess()));
          }
          return of(logoutSuccess());
        }),
        catchError(() => {
          return of(logoutError());
        }),
      );
    }),
  );

export const resetPasswordEpic = (action$, state) =>
  action$.pipe(
    ofType(RESET_PASSWORD),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: {
            accessToken: { token },
            id,
          },
        },
      } = state;
      return ajax({
        url: baseUrl + 'auth/reset-password/?token=' + id,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: { password: payload },
      }).pipe(
        mergeMap(() => {
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );
