import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut, logIn } from '../actions';

const AdminPanel = (props) => {
  const { handleLogIn } = props;

  return (
    <>
      <button type="button" onClick={handleLogIn}>
        Log In
      </button>
      <h2>hello</h2>
    </>
  );
};

export default connect(
  (state) => ({
    isLoggedIn: state.isUserAuthenticated,
    user: state.user,
  }),
  (dispatch) => ({
    handleLogOut: () => dispatch(logOut()),
    handleLogIn: () => {
      dispatch(logIn('verySafePassword', 'Mr Test'));
    },
  }),
)(AdminPanel);

AdminPanel.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};
