import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, mergeMap } from 'rxjs/operators';

import {
  CREATE_VENDOR,
  DELETE_VENDOR_BY_ID,
  FETCH_VENDORS,
  FETCH_VENDOR_BY_ID,
  UPDATE_VENDOR_BY_ID,
} from './ActionTypes';

export const createVendoEpic = (action$, state) =>
  action$.pipe(
    ofType(CREATE_VENDOR),
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
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: payload.body,
      }).pipe(
        mergeMap((res) => {
          return of();
        }),
        catchError((error) => {
          return of();
        }),
      );
    }),
  );
export const fetchVendorsEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_VENDORS),
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
          const vendors = results.filter((vendor) => vendor.role === 'vendor');
          payload(vendors);
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );

export const fetchVendorByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_VENDOR_BY_ID),
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
        catchError((error) => {
          return of();
        }),
      );
    }),
  );

export const updateVendorByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(UPDATE_VENDOR_BY_ID),
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
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: payload.body,
      }).pipe(
        mergeMap((res) => {
          return of();
        }),
        catchError((error) => {
          return of();
        }),
      );
    }),
  );
export const deleteVendorByIdEpic = (action$, state) =>
  action$.pipe(
    ofType(DELETE_VENDOR_BY_ID),
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
          console.log('delete');
          return of();
        }),
        catchError((error) => {
          console.log('error');
          return of();
        }),
      );
    }),
  );
