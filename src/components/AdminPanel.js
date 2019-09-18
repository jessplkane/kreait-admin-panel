import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { logOut, fetchPosts, fetchUsers } from '../actions';

import Users from './Users';
import Posts from './Posts';

const AdminPanel = ({
  handleLogOut,
  handleFetchPosts,
  handleFetchUsers,
  error,
  users,
  posts
}) => {
  useEffect(() => {
    handleFetchUsers();
    handleFetchPosts();
  }, [handleFetchUsers, handleFetchPosts]);

  if (error) return <h2>Oops! Something went wrong, please try again later</h2>;

  return (
    <Router>
      <header>
        <Link to="/admin-panel/users">Users</Link>
        <Link to="/admin-panel/posts">Posts</Link>
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      </header>

      <main>
        <Route
          path="/admin-panel/users"
          render={() => <Users users={users} posts={posts} />}
        />

        <Route
          path="/admin-panel/posts"
          render={() => <Posts posts={posts} users={users} />}
        />
      </main>
    </Router>
  );
};

export default connect(
  state => {
    return {
      isLoggedIn: state.auth.isUserAuthenticated,
      users: state.usersById,
      posts: state.posts
    };
  },
  dispatch => ({
    handleLogOut: () => dispatch(logOut()),
    handleFetchUsers: () => dispatch(fetchUsers()),
    handleFetchPosts: () => dispatch(fetchPosts())
  })
)(AdminPanel);

AdminPanel.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};
