import './index.css';
import React from 'react';

import { CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import MaterialThemeWrapper from './theme';
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
