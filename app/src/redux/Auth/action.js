import * as types from "./actionTypes";
import axios from "axios";
const LoginUser = (payload) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return await axios
    .post("https://reqres.in/api/login",payload )
    .then((r) => {
      console.log(r.data);
     return dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      return dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};
// const register = () => (dispatch) => {};
// const socialLogin = () => (dispatch) => {};

export const setAuthStatus = (status) => ({
  type: types.SET_AUTH_STATUS,
  payload: status,
});

export {
     LoginUser
    //   register, socialLogin 
};
