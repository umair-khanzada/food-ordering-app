import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_CATEGORY } from '../../redux/ActionTypes';
import { formMessage } from './actions';

export const createCategoryEpic = (action$, state) =>
  action$.pipe(
    ofType(ADD_CATEGORY),
    mergeMap(({ payload }) => {
      console.log('payload', payload);
      const {
        value: {
          authReducer: { accessToken },
        },
      } = state;
      const {
        token: { token },
      } = { token: accessToken };
      console.log('token', token);
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
          console.log('success');
          return of(formMessage({ message, status }));
        }),
        catchError((err) => {
          const {
            response: { message },
            status,
          } = err;
          console.log('failed');
          return of(formMessage({ message, status }));
        }),
      );
    }),
  );