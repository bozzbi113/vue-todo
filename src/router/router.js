import VueRouter from "vue-router";
import Vue from "vue/dist/vue.js";
import TodosPage from "../pages/todos/TodosPage";
import TodoAddPage from "../pages/todoAdd/todoAddPage";
import TodoInforPage from "../pages/todoInfor/todoInfor.vue";
import LoginPage from "../pages/login/LoginPage.vue";
import * as ultils from "../ultils/common";
import { ROLES, ROLE } from "../constants";

Vue.use(VueRouter);

const routes = [
  // { path: "/", component: TodosPage, name: "" },
  {
    path: "/login",
    component: LoginPage,
    name: "login"
  },
  {
    path: "/todos",
    component: TodosPage,
    name: "todos",
    meta: {
      permission: [ROLES.ADMIN, ROLES.USER]
    }
  },
  {
    path: "/todos/:id",
    component: TodoInforPage,
    name: "todo-infor",
    meta: {
      permission: [ROLES.ADMIN]
    }
  },
  {
    path: "/add-todo",
    name: "add-todo",
    component: TodoAddPage,
    meta: {
      permission: [ROLES.ADMIN, ROLES.USER]
    }
  },
  { path: "*", redirect: "/todos" }
];

const router = new VueRouter({
  base: "/web/guest/home",
  routes
});

router.beforeEach((to, from, next) => {
  const { permission = [] } = to.meta;
  if (to.name !== "login") {
    if (!ultils.getToken()) {
      next({ name: "login" });
    } else {
      if (
        permission.includes(ultils.getLocalStorage(ROLE)) ||
        to.name == "todos"
      ) {
        next();
      }
    }
  } else if (to.name === "login") {
    ultils.getToken() ? next({ name: "/todos" }) : next();
  }
});

export default router;
