import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  error
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
      },
      error => {
        console.log(error, 'an error occurred');
        dispatch(fetchUsersFailure());
      }
    );
  };
};
