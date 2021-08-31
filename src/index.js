import './index.css';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import App from './App';
import GlobalStyles from './theme/GlobalStyles';
import MaterialThemeWrapper from './theme';
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

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
