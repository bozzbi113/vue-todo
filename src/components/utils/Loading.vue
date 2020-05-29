<template>
  <div v-show="show">
    <h1>Loading...</h1>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean
  }
};
</script>
