import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FETCH_VENDORS } from './ActionTypes';

export const fetchVendorsEpic = (action$, state) =>
  action$.pipe(
    ofType(FETCH_VENDORS),
    mergeMap(({ payload }) => {
      return ajax({
        url: 'http://localhost:4000/vendors',
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
