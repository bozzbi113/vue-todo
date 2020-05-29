<template>
  <div class="nav-bar">
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">To do aplication</a>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!isAuthen">
          <router-link to="/login">
            <span aria-hidden="true" class="glyphicon glyphicon-log-in"></span>
            Login
          </router-link>
          <!-- <span aria-hidden="true" class="glyphicon glyphicon-log-in"></span>
          Login -->
        </li>
        <template v-if="isAuthen">
          <li>
            <span>{{ user.name }}</span>
          </li>
          <li>
            <div @click="onLogout">
              <span
                aria-hidden="true"
                class="glyphicon glyphicon-log-out"
              ></span>
              Logout
            </div>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
import "./style.scss";
import { mapGetters, mapActions } from "vuex";
import { COMMON_GET_AUTHEN_GETTER } from "../../constants";
import {
  COMMON_LOGOUT_ACTION,
  COMMON_GET_USER_GETTER
} from "../../store/common/constants";
export default {
  props: {},
  computed: {
    ...mapGetters("common", {
      isAuthen: COMMON_GET_AUTHEN_GETTER,
      user: COMMON_GET_USER_GETTER
    })
  },
  mounted() {
    // console.log("===", this.$router);
  },
  methods: {
    ...mapActions("common/", {
      onLogout: COMMON_LOGOUT_ACTION
    })
  }
};
</script>

<style>
.example {
  color: red;
}
</style>
