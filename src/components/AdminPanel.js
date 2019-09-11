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

const mapStateToProps = (state) => ({
  isLoggedIn: state.isUserAuthenticated,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => dispatch(logOut()),
  handleLogIn: () => {
    dispatch(logIn('verySafePassword', 'Mr Test'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);

AdminPanel.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};
