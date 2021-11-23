import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import MainContainer from './routes/Layout/MainContainer';
const App = () => {
  alert('starting...');

  const todayDate = new Date(new Date());

  const isInStandaloneMode = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone ||
    document.referrer.includes('android-app://');

  if (isInStandaloneMode()) {
    if (localStorage.getItem('updateDateCheck') === null) {
      localStorage.setItem(
        'updateDateCheck',
        todayDate.getFullYear() + ', ' + todayDate.getMonth() + ',' + todayDate.getDate(),
      );
    } else {
      const previousDate = localStorage.getItem('updateDateCheck').split(',');
      const year = parseInt(previousDate[0]);
      const month = parseInt(previousDate[1]);
      const day = parseInt(previousDate[2]);

      if (!(todayDate.getFullYear() === year && todayDate.getMonth() === month && todayDate.getDate() === day)) {
        localStorage.setItem(
          'updateDateCheck',
          todayDate.getFullYear() + ', ' + todayDate.getMonth() + ',' + todayDate.getDate(),
        );
        alert('update');
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const registration of registrations) {
              alert('yes');
              registration.update();
            }
          });
          window.location.reload();
        }
      } else {
        alert('no update');
      }
    }
  }

  return (
    <Router>
      <MainContainer />;
    </Router>
  );
};
export default App;
