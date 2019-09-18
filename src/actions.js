import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';
export const RESET_FETCH_ERROR = 'RESET_FETCH_ERROR';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const setFetchError = () => ({
  type: SET_FETCH_ERROR
});

export const resetFetchError = () => ({
  type: RESET_FETCH_ERROR
});

export const logIn = logInDetails => ({
  type: LOGIN,
  logInDetails
});

export const logOut = () => ({ type: LOGOUT });

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());

    return axios.get('https://jsonplaceholder.typicode.com/users').then(
      res => {
        dispatch(fetchUsersSuccess(res.data));
        dispatch(resetFetchError());
      },
      () => {
        dispatch(setFetchError());
      }
    );
  };
};

export const fetchPosts = () => {
  return function(dispatch) {
    dispatch(fetchPostsRequest());

    return axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {
        dispatch(fetchPostsSuccess(res.data));
        dispatch(resetFetchError());
      },
      () => {
        dispatch(setFetchError());
      }
    );
  };
};
