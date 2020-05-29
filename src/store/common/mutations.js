import {
  COMMON_SET_LOADING_STATUS_MUTATION,
  COMMON_SET_AUTHEN_MUTATION
} from "../../constants";
import { COMMON_SET_USER_MUATATION } from "./constants";

export default {
  [COMMON_SET_LOADING_STATUS_MUTATION](state, data) {
    state.isLoading = data;
  },
  [COMMON_SET_AUTHEN_MUTATION](state, data) {
    state.isAuthen = data;
  },
  [COMMON_SET_USER_MUATATION](state, data) {
    state.user = data;
  }
};
