import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isUserLoggedIn }) => (
  <Route
    render={() => (isUserLoggedIn ? <Component /> : <Redirect to={{ pathname: '/login' }} />)}
  />
);

export default connect((state) => ({
  isUserLoggedIn: state.isUserAuthenticated,
}))(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};
