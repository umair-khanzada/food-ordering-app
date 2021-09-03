/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
/* eslint-disable import/order */
import './index.css';
import React from 'react';

import { CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line import/no-named-as-default
import MaterialThemeWrapper from './theme';
import GlobalStyles from './theme/GlobalStyles';

ReactDOM.render(
  <MaterialThemeWrapper>
    <CssBaseline />
    <GlobalStyles />
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>
  </MaterialThemeWrapper>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
