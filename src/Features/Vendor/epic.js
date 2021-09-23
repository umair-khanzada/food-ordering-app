import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_RESTAURANT, FETCH_RESTAURANTS, FETCH_CATEGORIES, ADD_ITEM } from '../../redux/ActionTypes';
import { formMessage } from '../Auth/actions';
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
          console.log('success');
          const {
            response: { message },
            status,
          } = res;

          return of(formMessage({ message, status }));
        }),
        catchError((err) => {
          console.log('error');

          return of(formMessage({ message: '', status: 0 }));
        }),
      );
    }),
  );

export default addRestaurantEpic;

export const fetchRestaurantEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_RESTAURANTS),
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
        method: 'GET',
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
export const fetchCategoriesEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_CATEGORIES),
    mergeMap(({ payload }) => {
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };
      console.log('token fetchcategoriesepic', token);
      return ajax({
        url: 'http://localhost:4000/v1/categories',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      }).pipe(
        mergeMap((res) => {
          console.log('token', token);
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
          console.log('success-add-item-epic', res);
          const {
            response: { message },
            status,
          } = res;

          return of(formMessage({ message, status }));
        }),
        catchError((err) => {
          console.log('error');

          return of(formMessage({ message: '', status: 0 }));
        }),
      );
    }),
  );
