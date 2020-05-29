<template>
  <div
    class="login-page"
    :style="{
      'background-image':
        'url(' + require('../../../assets/images/bg-01.webp') + ')'
    }"
  >
    <div class="login-wrapper">
      <h4>Login</h4>
      <form ref="form">
        <InputCustom
          v-model="form.username"
          :label="'User name'"
          :type="'text'"
          :class="''"
          :error="$v.form.username.$error"
          :placeholder="'Enter title'"
        ></InputCustom>

        <InputCustom
          v-model="form.password"
          :label="'password'"
          :type="'password'"
          :error="$v.form.password.$error"
          :placeholder="'Enter content'"
        />
        <div class="login-wrapper__button">
          <button class="btn btn-primary" @click="onSave">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "./style.scss";
//service

//component
import InputCustom from "../../components/InputCustom/InputCustom.vue";
import { mapActions } from "vuex";
import * as ultils from "../../ultils/common";
import vh, { username, password } from "../../ultils/validators";

import { COMMON_LOGIN_ACTION } from "../../store/common/constants";
export default {
  components: {
    InputCustom
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    vmsgUsername() {
      return vh.vmsg(this.$v.form.username, username);
    },
    vmgsPassword() {
      return vh.vmsg(this.$v.form.password, password);
    }
  },
  validations: {
    form: {
      username: vh.vrules(username),
      password: vh.vrules(password)
    }
  },
  methods: {
    ...mapActions("common", {
      login: COMMON_LOGIN_ACTION
    }),
    onSave() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.login(ultils.cloneDeepObj(this.form));
    },
    onBack() {
      ultils.redirectTo("/todos");
    }
  }
};
</script>

<style>

.example {
  color: red;
}
</style>
