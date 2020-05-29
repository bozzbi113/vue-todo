<template>
  <div class="wrapper">
    <Loading />
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import LiferayService from "./services/liferay-api.service";
import "./scss/common.scss";
//component
import Loading from "./components/loading/loading.vue";
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: {
    Loading,
    NavBar
  },
  computed: {
    currentUserJson: () => {
      return JSON.stringify(LiferayService.getCurrentUser());
    }
  },
  mounted() {}
};
</script>
<style>
.wrapper {
  height: 100vh;
  background: whitesmoke;
  overflow: auto;
}
</style>
