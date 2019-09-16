import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { logIn } from '../actions';

const LogIn = ({ handleLogIn, location }) => {
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: ''
  });
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleDetailsInput = (key, e) => {
    const { value } = e.target;

    setLogInDetails({ ...logInDetails, [key]: value });
  };

  const handleLogInSubmit = () => {
    // TODO: Add validation
    handleLogIn();
    setRedirectToReferrer(true);
  };

  const { from } = location.state || { from: { pathname: '/' } };

  if (redirectToReferrer) return <Redirect to={from} />;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={e => handleDetailsInput('username', e)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={e => handleDetailsInput('password', e)}
        />
        <button type="button" onClick={handleLogInSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default connect(
  state => ({
    isUserLoggedIn: state.auth.isUserAuthenticated
  }),
  dispatch => ({
    handleLogIn: () => {
      dispatch(logIn({ username: '123', password: '456' }));
    }
  })
)(LogIn);

LogIn.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string
      })
    })
  })
};

LogIn.defaultProps = {
  location: {
    state: {
      from: {
        pathname: '/'
      }
    }
  }
};
