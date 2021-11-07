import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { toggleSnackbarOpen } from '../../components/AlertMessage/alertRedux/actions';
import { EDIT_USER } from '../../redux/ActionTypes';
import { baseUrl, ERROR, SUCCESS } from '../../scripts/constants';
import { authLoadingToggle, logout, updateUserData } from '../Auth/actions';

export const editUserEpic = (action$, state) =>
  action$.pipe(
    ofType(EDIT_USER),
    mergeMap(({ payload: { id, name, email, password, contact, history } }) => {
      const {
        value: {
          authReducer: {
            accessToken: { token },
          },
        },
      } = state;
      return concat(
        of(authLoadingToggle()),
        ajax({
          url: `${baseUrl}users/${id}`,
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
            return concat(
              of(
                updateUserData({
                  name,
                  email,
                  contact,
                }),
              ),

              of(toggleSnackbarOpen({ snackbarMessage: 'Profile Updated!', messageType: SUCCESS })),
            );
          }),
          catchError((err) => {
            if (err.status === 401) {
              return concat(
                of(logout({ history })),
                of(
                  toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }),
                ),
              );
            }

            return of(toggleSnackbarOpen({ snackbarMessage: err.message, messageType: ERROR }));
          }),
        ),
        of(authLoadingToggle()),
      );
    }),
  );
