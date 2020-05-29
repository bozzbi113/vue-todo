<template>
  <div class="container-wrapper" v-if="isLoading">
    <div class="container-wrapper__spinner"></div>
  </div>
</template>

<script>
import "./style.scss";
import { mapGetters } from "vuex";
import { COMMON_GET_LOADING_GETTER } from "../../constants";
export default {
  props: {},
  computed: {
    ...mapGetters("common", {
      isLoading: COMMON_GET_LOADING_GETTER
    })
  }
};
</script>

<style>
.example {
  color: red;
}
</style>
