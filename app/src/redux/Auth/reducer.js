import { appData, saveData } from "../../components/LocalStorage";
import * as types from "./actionTypes";
const InitialState = {
  isLoading: false,
  isError: false,
  token:appData("auth") || "",
  isAuth: false,
  msg: "",
};
const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
      };
    case types.LOGIN_SUCCESS:
      console.log(payload,"-reducer")
      let newLogin = saveData("auth", payload);
      return {
        ...state,
        token: newLogin,
        isAuth: true,
        msg: payload,
      };
    case types.SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
      };
    case types.REGISTER_REQUEST:
      return {
        ...state,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export { reducer };
