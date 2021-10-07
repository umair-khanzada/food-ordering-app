import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { toggleSnackbarOpen } from '../../components/AlertMessage/alertRedux/actions';
import { hideLoader, showLoader } from '../../components/Loader/actions';
import { EDIT_USER } from '../../redux/ActionTypes';
import { API_ROUTE } from '../../scripts/constants';
import { logout, updateUserData } from '../Auth/actions';

export const editUserEpic = (action$, state) =>
  action$.pipe(
    ofType(EDIT_USER),
    mergeMap(({ payload: { id, name, email, password, contact, setOnSaveSuccess, history } }) => {
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
            contact,
          },
        }).pipe(
          mergeMap(({ response: { name, email, contact } }) => {
            setOnSaveSuccess(true);
            return of(
              updateUserData({
                name,
                email,
                contact,
              }),
            );
          }),
          catchError((err) => {
            if (err.status === 401) {
              return concat(of(logout({ history })), of(toggleSnackbarOpen('Session Expired! Please Log in again.')));
            }
            setOnSaveSuccess(false);
            return of();
          }),
        ),
        of(hideLoader()),
      );
    }),
  );
