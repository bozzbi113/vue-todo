<template>
  <div class="todos">
    <InputSearch v-model="query.q" @onSearch="onSearch" />
    <div class="todos__content">
      <Todo
        v-for="todo in todosData"
        :key="todo.id"
        :data="todo"
        @onDelete="onDeleteTodo"
        @onUpdate="onUpdateStatusTodo"
        @onUpdateInfor="onUpdateInfor"
      ></Todo>

      <Pagination @clickHandler="onClickHandler" />
      <button class="btn btn-secondary m-t-10" @click="addNewTodo">
        Add new item
      </button>
    </div>
  </div>
</template>

<script>
import "./style.scss";
//component
import Todo from "../../components/todo/todo.vue";
import InputSearch from "../../components/InputSeach/InputSearch.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import {
  TODO_GET_TODOS_ACTION,
  TODO_DELETE_TODO_ACTION,
  TODO_UPDATE_STATUS_TODO_ACTION,
  TODO_GET_TODOS_GETTER,
  TODO_GET_TODOS_BY_KEY_ACTION
} from "../../constants";
import { TODO_GET_TODOS_PAGINATION_ACTION } from "../../store/constant";
import { mapActions, mapGetters } from "vuex";
import * as ultils from "../../ultils/common";
export default {
  components: {
    Todo,
    InputSearch,
    Pagination
  },
  data() {
    return {
      query: {
        q: "",
        page: 1,
        limit: 3
      }
    };
  },
  computed: {
    ...mapGetters({
      todosData: TODO_GET_TODOS_GETTER
    })
  },
  watch: {
    "query.page"() {
      this.onGetTodosPagination(ultils.cloneDeepObj(this.query));
    }
  },
  created() {
    this.onGetTodosPagination(ultils.cloneDeepObj(this.query));
  },
  methods: {
    ...mapActions({
      onGetTodo: TODO_GET_TODOS_ACTION,
      onDeleteTodo: TODO_DELETE_TODO_ACTION,
      onUpdateStatusTodo: TODO_UPDATE_STATUS_TODO_ACTION,
      onSearchTodos: TODO_GET_TODOS_BY_KEY_ACTION,
      onGetTodosPagination: TODO_GET_TODOS_PAGINATION_ACTION
    }),
    addNewTodo() {
      ultils.redirectTo("/add-todo");
    },
    onUpdateInfor(id) {
      ultils.redirectTo("/todos/" + id);
    },
    onSearch() {
      this.onGetTodosPagination(ultils.cloneDeepObj(this.query));
    },
    onClickHandler(page) {
      this.query.page = page;
    }
  }
};
</script>

<style>
/* @import "./style.scss"; */
</style>
