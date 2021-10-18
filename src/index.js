import './index.css';
import React from 'react';

import { CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import MaterialThemeWrapper from './theme';
import GlobalStyles from './theme/GlobalStyles';
import ErrorBoundary from './util/ErrorBoundary/index';

const persistor = persistStore(store);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <MaterialThemeWrapper>
    <CssBaseline />
    <GlobalStyles />
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </MaterialThemeWrapper>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
