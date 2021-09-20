import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { FETCH_USERS } from './ActionTypes';

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
