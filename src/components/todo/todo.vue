<template>
  <div class="todo">
    <div class="todo__wrapper">
      <div
        :class="[
          'todo__wrapper__title',
          getPriorityColor(data.priority && data.priority.code)
        ]"
      >
        {{ data.title }}
      </div>
      <div class="todo__wrapper__content">{{ data.content }}</div>
      <div class="todo__wrapper__option">
        <button
          v-if="!data.done"
          class="btn btn-info"
          @click="onUpdateInfor(data.id)"
        >
          Update
        </button>
        <button class="btn btn-danger" @click="onDelete(data.id)">
          Delete
        </button>
      </div>
    </div>
    <button
      :class="['btn', data.done ? ' btn-secondary' : 'btn-primary']"
      :disabled="data.done"
      @click="onUpdateStatus(data)"
    >
      {{ data.done ? "Complete" : "Pending" }}
    </button>
  </div>
</template>

<script>
import "./style.scss";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          priority: {
            code: ""
          }
        };
      }
    }
  },
  methods: {
    onDelete(id) {
      this.$emit("onDelete", id);
    },
    onUpdateStatus() {
      this.$emit("onUpdate", this.data);
    },
    onUpdateInfor(id) {
      this.$emit("onUpdateInfor", id);
    },
    onUpdate(id) {
      this.$router.push("/todo/" + id);
    },
    getPriorityColor(type) {
      let temp = "todo__wrapper__title";
      switch (parseInt(type)) {
        case 1:
          return (temp += "--urgent");
        case 2:
          return (temp += "--high");
        case 3:
          return (temp += "--medium");
        case 4:
          return (temp += "--low");
        default:
          return "";
      }
    }
  }
};
</script>

<style></style>
