import { TODO_GET_TODOS_GETTER, TODO_GET_TODO_GETTER } from "../constants";

export default {
  [TODO_GET_TODOS_GETTER]: state => {
    return state.todos;
  },
  [TODO_GET_TODO_GETTER]: state => {
    return state.todo;
  }
};
