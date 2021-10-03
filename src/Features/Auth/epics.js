import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { showLoader, hideLoader } from '../../components/Loader/actions';
import { FORGOT_PASSWORD, LOGIN, LOGOUT, SIGNUP, LOGIN_SUCCESS, RESET_PASSWORD } from '../../redux/ActionTypes';
import { API_ROUTE, defaultRouteForRoles } from '../../scripts/constants';
import { loginSuccess, logoutError, logoutSuccess, setFormMessage } from './actions';
export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(({ payload: { userData, history } }) => {
      return concat(
        of(showLoader()),
        ajax({
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
        ),
        of(hideLoader()),
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
      return concat(
        of(showLoader()),
        ajax({
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
        ),
        of(hideLoader()),
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
        url: API_ROUTE + '/auth/reset-password/?token=' + id,
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
