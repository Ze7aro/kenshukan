import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./actions";

const initialState = {
  user: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    /*  case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
        };
  
      case LOGIN_FAILED:
        return {
          ...state,
          error: action.payload.error,
        };
  */
    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
