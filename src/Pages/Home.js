import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  const history = useHistory();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) history.push('/login');
  }, [history, isLoggedIn]);

  return 'Home';
};

export default Home;
