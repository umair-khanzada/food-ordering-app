// import { ofType } from 'redux-observable';
// import { of } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import { mergeMap, catchError } from 'rxjs/operators';
// import { baseUrl } from '../../../scripts/constants';
// import { FETCH_USERS } from './ActionTypes';
//
// export const fetchUsersEpic = (action$, state) =>
//   action$.pipe(
//     ofType(FETCH_USERS),
//     mergeMap(({ payload }) => {
//       return ajax({
//         url: 'http://localhost:4000/usersList',
//         method: 'GET',
//       }).pipe(
//         mergeMap((res) => {
//           payload(res.response);
//           return of();
//         }),
//         catchError(() => {
//           return of();
//         }),
//       );
//     }),
//   );
