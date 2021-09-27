import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_RESTAURANT, ADD_ITEM, DELETE_ITEM } from '../../redux/ActionTypes';
import { setFormMessage } from '../Auth/actions';
const addRestaurantEpic = (action$, state) =>
  action$.pipe(
    ofType(ADD_RESTAURANT),
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
        url: 'http://localhost:4000/v1/kitchens',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
          return of(setFormMessage({ message: '', status: 0 }));
        }),
      );
    }),
  );

export default addRestaurantEpic;
export const addItemEpic = (action$, state) =>
  action$.pipe(
    ofType(ADD_ITEM),
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
        url: 'http://localhost:4000/v1/items',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
          return of(setFormMessage({ message: '', status: 0 }));
        }),
      );
    }),
  );

export const deleteItemEpic = (action$, state) =>
  action$.pipe(
    ofType(DELETE_ITEM),
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
        url: `http://localhost:4000/v1/items/${payload}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      }).pipe(
        mergeMap((res) => {
          const {
            response: { results },
          } = res;
          payload(results);
          return of();
        }),
        catchError((err) => {
          return of();
        }),
      );
    }),
  );
