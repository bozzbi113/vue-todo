<template>
  <Wrapper>
    <div class="todo-add-page">
      <h1>Add new todo</h1>
      <form ref="form">
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
        <!-- <div>
          <div class="form-check">
            <input
              id="gridCheck1"
              v-model="test"
              class="form-check-input"
              value="Jack"
              type="checkbox"
            />
            <label class="form-check-label" for="gridCheck1">
              Jack
            </label>
          </div>
          <div class="form-check">
            <input
              id="gridCheck2"
              v-model="test"
              class="form-check-input"
              value="Tom"
              type="checkbox"
            />
            <label class="form-check-label" for="gridCheck2">
              Tom
            </label>
          </div>
        </div> -->
        <Checkbox
          v-model="form.country"
          :label="'Country'"
          :options="countryOptions"
        ></Checkbox>
        <div>
          <button class="btn btn-primary" @click="onBack">Back</button>
          <button class="btn btn-primary" @click="onSave">Save</button>
        </div>
      </form>
    </div>
  </Wrapper>
</template>

<script>
import "./style.scss";
import { mapActions } from "vuex";

import InputCustom from "../../components/InputCustom/InputCustom.vue";
import SelectCustom from "../../components/SelectCustom/SelectCustom.vue";
import Checkbox from "../../components/Chechbox/Checkbox.vue";
import Wrapper from "../../components/Wrapper/Wrapper.vue";
import { TODO_ADD_TODO_ACTION } from "../../constants";
import * as ultils from "../../ultils/common";
import vh, { title, content } from "../../ultils/validators";
import { PRIORITY_TYPE, COUNTRY_LIST } from "../../store/common/constants";
export default {
  components: {
    InputCustom,
    SelectCustom,
    Wrapper,
    Checkbox
  },
  data() {
    return {
      countryOptions: COUNTRY_LIST,
      options: PRIORITY_TYPE,
      form: {
        title: "",
        content: "",
        type: "",
        country: [""],
        done: false
      },
      query: {
        page: 0,
        limit: 3
      }
    };
  },
  computed: {
    vmsgTitle() {
      return vh.vmsg(this.$v.form.title, title);
    },
    vmgsContent() {
      return vh.vmsg(this.$v.form.content, content);
    }
  },
  mounted() {},
  validations: {
    form: {
      title: vh.vrules(title),
      content: vh.vrules(content)
    }
  },
  methods: {
    ...mapActions({
      onAddTodo: TODO_ADD_TODO_ACTION
    }),
    onSave() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.onAddTodo(ultils.cloneDeepObj(this.form));
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
