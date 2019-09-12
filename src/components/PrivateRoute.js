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
  isUserLoggedIn: state.isUserAuthenticated
}))(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string
      })
    })
  }).isRequired
};
