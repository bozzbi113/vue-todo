import { TODO_SET_TODOS_MUTATION, TODO_SET_TODO_MUATION } from "../constants";

export default {
  [TODO_SET_TODOS_MUTATION](state, data) {
    state.todos = data;
  },
  [TODO_SET_TODO_MUATION](state, data) {
    state.todo = data;
  }
};
