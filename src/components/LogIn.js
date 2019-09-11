import React, { useState } from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions';

const LogIn = () => {
  const [logInDetails, setLogInDetails] = useState({});

  const handleDetailsInput = (e) => {
    const { value } = e.target;

    setLogInDetails(...logInDetails, value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={handleDetailsInput}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={handleDetailsInput}
        />
      </form>
    </div>
  );
};

export default connect(
  (state) => ({
    isUserLoggedIn: state.isUserAuthenticated,
  }),
  (dispatch) => ({
    handleLogIn: () => {
      dispatch(logIn('verySafePassword', 'Mr Test'));
    },
  }),
)(LogIn);
