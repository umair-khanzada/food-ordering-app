import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_RESTAURANT } from '../../redux/ActionTypes';
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

export default addRestaurantEpic;
