import {
  COMMON_LOGIN_ACTION,
  COMMON_LOGOUT_ACTION,
  COMMON_SET_USER_MUATATION
} from "./constants";
import {
  COMMON_SET_LOADING_STATUS_MUTATION,
  COMMON_SET_AUTHEN_MUTATION
} from "../../constants";
import loginService from "../../services/loginServicce";
import router from "../../router/router";
export default {
  async [COMMON_LOGIN_ACTION]({ commit }, data) {
    try {
      commit(COMMON_SET_LOADING_STATUS_MUTATION, true);
      // await setTimeout(function() {
      if (loginService.login(data)) {
        // const res = await loginService.login(data);
        commit(COMMON_SET_AUTHEN_MUTATION, true);
        commit(COMMON_SET_USER_MUATATION, { name: "Khanh Tuong" });
        router.push("/todos");
      }
      commit(COMMON_SET_LOADING_STATUS_MUTATION, false);
      // }, 1000);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit(COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [COMMON_LOGOUT_ACTION]({ commit }) {
    try {
      commit(COMMON_SET_LOADING_STATUS_MUTATION, true);
      commit(COMMON_SET_AUTHEN_MUTATION, false);
      loginService.logout();
      router.push("/login");
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit(COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  }
};
