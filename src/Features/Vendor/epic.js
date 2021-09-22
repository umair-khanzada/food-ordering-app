import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';

import { ADD_RESTAURANT } from '../../redux/ActionTypes';
import { formMessage } from './action';
const addRestaurantEpic = (action$, state) =>
  action$.pipe(
    ofType(ADD_RESTAURANT),
    mergeMap(({ payload }) => {
      console.log('payload', payload);
      //   const {
      //     value: {
      //       authReducer: { accessToken },
      //     },
      //   } = state;
      //   const {
      //     token: { token },
      //   } = { token: accessToken };
      //   console.log('token', token);
      return ajax({
        url: 'http://localhost:4000/v1/kitchens',
        method: 'POST',
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTQxYTJkYjdhOGJkYjQzZDhlNTkzNWIiLCJpYXQiOjE2MzIzMzIxNDAsImV4cCI6MTYzNDkyNDE0MCwidHlwZSI6InJlZnJlc2gifQ.LuvRvrzT05zruMsLL7JH0VElWa3ffFD-J-5KvuRH4Zw',
        },
        body: payload,
      }).pipe(
        mergeMap((res) => {
          //   const {
          //     response: { message },
          //     status,
          //   } = res;

          const { response } = res;
          const { name, id } = response;

          return of(formMessage({ name, id }));
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

export default addRestaurantEpic;
