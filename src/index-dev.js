// Vue
import Vue from "vue/dist/vue.js";
// import VueRouter from "vue-router";

// App
import router from "./router/router";
import store from "./store";
import App from "./App.vue";

import Vuelidate from "vuelidate";
// CSS
import "../assets/css/main.css";
import "../assets/css/normalize.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

Vue.use(Vuelidate);
Vue.config.productionTip = false;

Vue.directive("color", {
  bind(el, binding) {
    const { value, arg } = binding;
    if (arg === "background") {
      el.style.backgroundColor = value || "rgb(224, 217, 217)";
    } else {
      el.style.color = value;
    }
  }
});

Vue.directive("format", {
  bind(el, binding) {
    const { modifiers } = binding;
    const { bold, underline } = modifiers;

    if (bold) {
      el.style.fontWeight = "bold";
    }
    if (underline) {
      el.style.textDecoration = "underline";
    }
  }
});

new Vue({
  components: { App },
  render: h => h(App),
  router,
  store: store
}).$mount("#app");
