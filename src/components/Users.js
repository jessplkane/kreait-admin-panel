import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

const Users = ({ users, handleFetchUsers }) => {
  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  return (
    <div>
      <p>Users</p>
    </div>
  );
};

export default connect(
  state => ({
    users: state.usersById
  }),
  dispatch => ({
    handleFetchUsers: () => dispatch(fetchUsers())
  })
)(Users);
