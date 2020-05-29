// Vue
import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
//import vuetify from './plugins/vuetify';

// App
import router from "./router/router";
import { store } from "./services/store";
import App from "./App.vue";

// CSS
import "../assets/css/main.css";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueRouter);

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function index({
  portletNamespace,
  contextPath,
  portletElementId
}) {
  store.state.portletNamespace = portletNamespace;
  store.state.contextPath = contextPath;
  store.state.portletElementId = portletElementId;

  router.afterEach((to, from) => {
    // Reset client-side session tracking to avoid timeout.
    console.log("Extending LR session...");
    if (Liferay.Session) Liferay.Session.extend();
  });

  new Vue({
    render: h => h(App),
    router,
    components: { App }
  }).$mount(`#${portletElementId}`);
}
