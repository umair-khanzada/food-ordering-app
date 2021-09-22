import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import MainContainer from './routes/Layout/MainContainer';
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer />
    </QueryClientProvider>
  );
};
export default App;
