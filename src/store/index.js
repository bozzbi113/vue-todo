import VueX from "vuex";
// import Vue from "vue";
import Vue from "vue/dist/vue.js";
import common from "./common";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

Vue.use(VueX);

// const store = Vue => {
//   Vue && Vue.use(VueX);
//   return new VueX.Store({
//     state,
//     getters,
//     actions,
//     mutations,
//     modules: {
//       common
//     }
//   });
// };
// "vue-router": "^3.1.5",
export default new VueX.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    common
  }
});
