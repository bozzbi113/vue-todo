<template>
  <div class="pagination">
    <paginate
      :pageCount="10"
      :pageRange="2"
      :clickHandler="clickHandler"
      :prevText="'Prev'"
      :nextRext="'Next'"
      :containerClass="'pagination'"
      :pageClass="'page-item'"
      :pageLinkClass="'page-link'"
      :prevLinkClass="'page-link'"
      :nextLinkClass="'page-link'"
    >
    </paginate>
  </div>
</template>

<script>
import "./style.scss";

export default {
  props: {},
  mounted() {},
  methods: {
    clickHandler(data) {
      this.$emit("clickHandler", data);
    }
  }
};
</script>

<style>
.example {
  color: red;
}
</style>
