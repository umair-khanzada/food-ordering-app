import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FETCH_CATEGORIES } from './ActionTypes';

export const fetchCategoriesEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_CATEGORIES),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:5000/categories',
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
