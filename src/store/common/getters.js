import {
  COMMON_GET_LOADING_GETTER,
  COMMON_GET_AUTHEN_GETTER
} from "../../constants";
import { COMMON_GET_USER_GETTER } from "./constants";

export default {
  [COMMON_GET_LOADING_GETTER]: state => {
    return state.isLoading;
  },
  [COMMON_GET_AUTHEN_GETTER]: state => {
    return state.isAuthen;
  },
  [COMMON_GET_USER_GETTER]: state => {
    return state.user;
  }
};
