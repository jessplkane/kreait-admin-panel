import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { logOut } from '../actions';

const AdminPanel = props => {
  const { handleLogOut } = props;

  return (
    <Router>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
      <Link to="/admin-panel/users">Users</Link>
      <Link to="/admin-panel/posts">Posts</Link>
    </Router>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.auth.isUserAuthenticated,
    user: state.user
  }),
  dispatch => ({
    handleLogOut: () => dispatch(logOut())
  })
)(AdminPanel);

AdminPanel.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};
