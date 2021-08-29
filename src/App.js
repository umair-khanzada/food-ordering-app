import { connect } from 'react-redux';
import React from 'react';
import { Actions } from './redux/actions';

const App = ({ isLoggedIn, loginEpic }) => {
  return (
    <div>
      <h1>is Logged In: {isLoggedIn.toString()}</h1>
      <button onClick={loginEpic} type="button">
        Log In
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  loginEpic: () => dispatch(Actions.login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
