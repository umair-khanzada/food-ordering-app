import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { UPDATE_USER } from '../../redux/ActionTypes';
import { API_ROUTE } from '../../scripts/constants';
import { updateUserData } from '../Auth/actions';

export const updateUserEpic = (action$) =>
  action$.pipe(
    ofType(UPDATE_USER),
    mergeMap(({ payload: { id, name, email, password } }) => {
      return ajax({
        url: API_ROUTE + '/users/' + id,
        method: 'PATCH',
        body: {
          name,
          email,
          password,
        },
      }).pipe(
        mergeMap(({ name, email }) => {
          return of(
            updateUserData({
              name,
              email,
            }),
          );
        }),
        catchError((err) => {
          return of();
        }),
      );
    }),
  );
