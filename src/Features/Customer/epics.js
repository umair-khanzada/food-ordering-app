import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { hideLoader, showLoader } from '../../components/Loader/actions';
import { EDIT_USER } from '../../redux/ActionTypes';
import { API_ROUTE } from '../../scripts/constants';
import { updateUserData } from '../Auth/actions';

export const editUserEpic = (action$, state) =>
  action$.pipe(
    ofType(EDIT_USER),
    mergeMap(({ payload: { id, name, email, password, setOnSaveSuccess } }) => {
      const {
        value: {
          authReducer: {
            accessToken: { token },
          },
        },
      } = state;
      return concat(
        of(showLoader()),
        ajax({
          url: `${API_ROUTE}/users/${id}`,
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            name,
            email,
            password,
          },
        }).pipe(
          mergeMap(({ response: { name, email } }) => {
            setOnSaveSuccess(true);
            return of(
              updateUserData({
                name,
                email,
              }),
            );
          }),
          catchError((err) => {
            console.log('response2');

            setOnSaveSuccess(false);
            return of();
          }),
        ),
        of(hideLoader()),
      );
    }),
  );
