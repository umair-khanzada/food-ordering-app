import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { DELETE_USER_BY_ID, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER_BY_ID } from './ActionTypes';

export const fetchUsersEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_USERS),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };

      return ajax({
        url: 'http://localhost:4000/v1/users',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }).pipe(
        mergeMap((res) => {
          const { results } = res.response;
          payload(results);
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );

export const fetchUserByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_USER_BY_ID),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };

      return ajax({
        url: 'http://localhost:4000/v1/users/' + payload.id,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }).pipe(
        mergeMap((res) => {
          payload.getUserResponseFromEpic(res.response);
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );

export const updateUserByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(UPDATE_USER_BY_ID),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };
      console.log(payload);
      return ajax({
        url: 'http://localhost:4000/v1/users/' + payload.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: payload.body,
      }).pipe(
        mergeMap((res) => {
          console.log(res.response);
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );

export const deleteUserByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(DELETE_USER_BY_ID),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };

      return ajax({
        url: 'http://localhost:4000/v1/users/' + payload,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }).pipe(
        mergeMap((res) => {
          console.log(res.response);
          return of();
        }),
        catchError((error) => {
          console.log(error.message);
          return of();
        }),
      );
    }),
  );
