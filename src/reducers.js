import { combineReducers } from 'redux';

import {
  LOGIN,
  LOGOUT,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from './actions';

const initialState = {
  isUserAuthenticated: false,
  user: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (
        action.logInDetails.password === '456' &&
        action.logInDetails.username === '123'
      ) {
        return {
          ...state,
          ...{ isUserAuthenticated: true, user: action.user }
        };
      }

      // TODO: Add some sort of error state
      return { ...state };

    case LOGOUT:
      return { ...state, ...{ isUserAuthenticated: false, user: {} } };

    default:
      return state;
  }
};

const usersById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_FAILURE:
      // error state
      console.log('failure');

      return state;

    case FETCH_USERS_REQUEST:
      console.log('making request');

      return state;

    case FETCH_USERS_SUCCESS:
      const { users } = action;

      const usersById = users.reduce((acc, curr) => {
        return { ...acc, [curr.id]: { ...curr } };
      }, {});

      return { ...state, ...usersById };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth,
  usersById
});

export default rootReducer;
