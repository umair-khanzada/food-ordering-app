import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FETCH_ORDERS } from './ActionTypes';

export const fetchOrdersEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_ORDERS),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:5000/orders',
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
