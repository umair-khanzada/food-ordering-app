import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_CATEGORY, FETCH_CATEGORIES } from '../../redux/ActionTypes';
import { formMessage } from './actions';

export const createCategoryEpic = (action$, state) =>
  action$.pipe(
    ofType(ADD_CATEGORY),
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
        url: 'http://localhost:4000/v1/categories',
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

export const fetchCategoriesEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_CATEGORIES),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:4000/categories',
        method: 'GET',
      }).pipe(
        mergeMap((res) => {
          payload(res.response);
          return of();
        }),
        catchError(() => {
          return of();
        }),
      );
    }),
  );
