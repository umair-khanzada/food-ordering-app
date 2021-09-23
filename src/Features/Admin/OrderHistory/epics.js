export const fetchOrdersEpic = (action$, state) => {};
// action$.pipe(
//   ofType(FETCH_ORDERS),
//   mergeMap(({ payload }) => {
//     return ajax({
//       url: 'http://localhost:4000/orders',
//       method: 'GET',
//     }).pipe(
//       mergeMap((res) => {
//         payload(res.response);
//         return of();
//       }),
//       catchError(() => {
//         return of();
//       }),
//     );
//   }),
// );
