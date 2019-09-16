import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isUserLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default connect(state => ({
  isUserLoggedIn: state.auth.isUserAuthenticated
}))(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired
};
