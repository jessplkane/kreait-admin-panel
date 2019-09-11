import { LOGIN, LOGOUT } from './actions';

const initialState = {
  isUserAuthenticated: false,
  user: {},
};

const adminPanel = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (
        action.password === 'verySafePassword'
        && action.username === 'Mr Test'
      ) {
        return {
          ...state,
          ...{ isUserAuthenticated: true, user: action.user },
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

export default adminPanel;
