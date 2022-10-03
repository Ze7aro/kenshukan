export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const REGISTER_REQUEST = "REGISTER_REQUEST";

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload, // { username: "cliente", password: "cliente" }
});

/* export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};
*/
export const logout = () => ({
  type: LOGOUT,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});
