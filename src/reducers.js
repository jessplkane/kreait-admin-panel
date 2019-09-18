import { combineReducers } from 'redux';

import {
  LOGIN,
  LOGOUT,
  SET_FETCH_ERROR,
  RESET_FETCH_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_POSTS_SUCCESS
} from './actions';

const initialState = {
  isUserAuthenticated: Boolean(localStorage.getItem('token')),
  usersById: {},
  posts: []
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (
        action.logInDetails.password === '456' &&
        action.logInDetails.username === '123'
      ) {
        localStorage.setItem('token', 'exmapleToken');

        return {
          ...state,
          ...{ isUserAuthenticated: true }
        };
      }

      // TODO: Add some sort of error state
      return { ...state };

    case LOGOUT:
      return { ...state, ...{ isUserAuthenticated: false } };

    default:
      return state;
  }
};

const errors = (state = { fetchError: false }, action) => {
  switch (action.type) {
    case SET_FETCH_ERROR:
      return { ...state, fetchError: true };

    case RESET_FETCH_ERROR:
      return { ...state, fetchError: false };

    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts } = action;

      return [...state, ...posts];

    default:
      return state;
  }
};

const usersById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      const { users } = action;

      // TODO: Rename to something clearer
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
  errors,
  usersById,
  posts
});

export default rootReducer;
