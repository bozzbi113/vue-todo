<template>
  <form class="form-inline input-search">
    <div class="form-group">
      <input
        :id="id"
        type="text"
        :placeholder="placeholder"
        :value="value"
        :class="['form-control', classes]"
        @input="updateValue($event.target.value)"
      />
    </div>
    <button class="btn btn-secondary" @click="onSearch">
      Search
    </button>
  </form>
</template>
P
<script>
import "./style.scss";
export default {
  props: {
    id: {
      type: String,
      default: ""
    },

    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },

  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    },
    onSearch: function() {
      this.$emit("onSearch", this.value);
    }
  }
};
</script>
