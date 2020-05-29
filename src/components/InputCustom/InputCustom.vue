<template>
  <div class="form-group input-custom">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="label"
      :value="value"
      :class="['form-control', classes, error ? 'input-custom__input' : '']"
      @input="updateValue($event.target.value)"
    />
    <div v-show="error" class="input-custom__error">
      {{ errorMsg }}
    </div>
  </div>
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
    label: {
      type: String,
      required: true,
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
    error: {
      type: Boolean
    },
    errorMsg: {
      type: String,
      default: ""
    }
  },

  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
};
</script>
