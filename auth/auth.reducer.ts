import {
  AuthAction,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from './auth.actions';

export interface State {
  isAuthenticate: boolean;
}

const initialState: State = {
  isAuthenticate: false,
};

export function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticate: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticate: false,
      };
    default: {
      return state;
    }
  }
}

export const getIsAuth = (state: State) => state.isAuthenticate;
