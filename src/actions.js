export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logIn = (logInDetails) => ({
  type: LOGIN,
  logInDetails,
});

export const logOut = () => ({ type: LOGOUT });
