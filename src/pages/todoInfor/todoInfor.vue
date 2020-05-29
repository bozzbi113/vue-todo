<template>
  <Wrapper>
    <div class="todo-infor-page">
      <h1>Update todo</h1>
      <form ref="form">
        <!-- <div class="form-group">
        <label for="input-1">Title:</label>
        <input
          id="input-1"
          class="form-control"
          v-model="form.title"
          type="text"
          required
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="input-2">Content:</label>
        <input
          id="input-2"
          class="form-control"
          v-model="form.content"
          type="text"
          required
          placeholder="Enter content"
        />
      </div> -->
        <InputCustom
          v-model="form.title"
          :label="'Title'"
          :type="'text'"
          :class="''"
          :error="$v.form.title.$error"
          :errorMsg="vmsgTitle"
          :placeholder="'Enter title'"
        ></InputCustom>
        <InputCustom
          v-model="form.content"
          :label="'Content'"
          :type="'text'"
          :error="$v.form.content.$error"
          :errorMsg="vmgsContent"
          :placeholder="'Enter content'"
        />
        <SelectCustom
          :id="'priority'"
          v-model="form.priority"
          :label="'Priority'"
          :options="options"
        />
        <Checkbox
          v-model="form.country"
          :label="'Country'"
          :options="countryOptions"
        ></Checkbox>
        <button @click="onBack" class="btn btn-primary">Back</button>
        <button @click="onSave" class="btn btn-primary m-l-5">Save</button>
      </form>
      <router-view></router-view>
    </div>
  </Wrapper>
</template>

<script>
import "./style.scss";
import { mapActions } from "vuex";
import {
  TODO_GET_TODO_BY_ID_ACTION,
  TODO_GET_TODO_GETTER,
  TODO_UPDATE_TODO_ACTION
} from "../../constants";
import vh, { title, content } from "../../ultils/validators";
import InputCustom from "../../components/InputCustom/InputCustom.vue";
import Checkbox from "../../components/Chechbox/Checkbox.vue";
import Wrapper from "../../components/Wrapper/Wrapper.vue";
import SelectCustom from "../../components/SelectCustom/SelectCustom.vue";
import * as ultils from "../../ultils/common";
import { PRIORITY_TYPE, COUNTRY_LIST } from "../../store/common/constants";
export default {
  components: {
    InputCustom,
    SelectCustom,
    Checkbox,
    Wrapper
  },
  data() {
    return {
      options: PRIORITY_TYPE,
      countryOptions: COUNTRY_LIST,
      form: {
        title: "",
        content: "",
        done: false,
        priority: {},
        country: [""],
        id: ""
      }
    };
  },
  validations: {
    form: {
      title: vh.vrules(title),
      content: vh.vrules(content)
    }
  },
  computed: {
    todo() {
      return this.$store.getters[TODO_GET_TODO_GETTER];
    },
    vmsgTitle() {
      return vh.vmsg(this.$v.form.title, title);
    },
    vmgsContent() {
      return vh.vmsg(this.$v.form.content, content);
    }
  },
  watch: {
    todo() {
      this.form.title = this.todo.title;
      this.form.content = this.todo.content;
      this.form.done = this.todo.done;
      this.form.id = this.todo.id;
      this.form.priority = this.todo.priority;
      this.form.country = this.todo.country;
    }
  },
  created() {
    const { id } = this.$route.params;
    this.onGetTodoById(id);
  },
  methods: {
    ...mapActions({
      onGetTodoById: TODO_GET_TODO_BY_ID_ACTION,
      onUpdateTodo: TODO_UPDATE_TODO_ACTION
    }),
    onSave() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.onUpdateTodo(ultils.cloneDeepObj(this.form));
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
