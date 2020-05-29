<template>
  <div class="checkboxes-custom">
    <label>{{ label }}</label>
    <div v-for="(item, index) in options" :key="index" class="form-check">
      <input
        :id="`gridCheck1${index}`"
        v-model="selected"
        class="form-check-input"
        :value="item.name ? item.name : item"
        type="checkbox"
      />
      <label class="form-check-label" :for="`gridCheck1${index}`">
        {{ item.name ? item.name : "" }}
      </label>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  model: {
    event: "change"
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    label: {
      type: String,
      default() {
        return "";
      }
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  watch: {
    selected() {
      this.$emit("change", this.selected);
    },
    value() {
      this.selected = this.value;
    }
  },
  mounted() {},
  methods: {
    isSelectd(item, arrItem = []) {
      return arrItem.some(i => {
        return i.name ? i.name === item.name : i === item.name;
      });
    }
  }
};
</script>
