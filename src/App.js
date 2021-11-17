import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import MainContainer from './routes/Layout/MainContainer';
const App = () => {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
};
export default App;
