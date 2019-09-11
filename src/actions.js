export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logIn = (password, username) => ({
  type: LOGIN,
  password,
  username,
});

export const logOut = () => ({ type: LOGOUT });
