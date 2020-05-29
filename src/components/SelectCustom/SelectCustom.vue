<template>
  <div class="form-group select-custom">
    <label :for="id">{{ label }}</label>
    <select :id="id" class="form-control" @change="change">
      <option disabled value="">Choose</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.code"
        :selected="selectedOption(option)"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import "./style.scss";
export default {
  props: ["options", "value", "id", "label"],
  data() {
    return {
      selected: this.value
    };
  },
  watch: {
    value() {
      this.selected = this.value;
    }
  },
  methods: {
    selectedOption(option) {
      if (this.selected) {
        return option.code === this.selected.code;
      }
      return false;
    },
    change(e) {
      const selectedCode = e.target.value;
      const option = this.options.find(option => {
        return selectedCode === option.code;
      });
      this.selected = option;
      this.$emit("input", this.selected);
    }
  }
};
</script>
