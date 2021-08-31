/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
/* eslint-disable import/order */
import './index.css';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import App from './App';
import MaterialThemeWrapper from './theme';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './theme/GlobalStyles';

ReactDOM.render(
  <MaterialThemeWrapper>
    <CssBaseline />
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MaterialThemeWrapper>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
