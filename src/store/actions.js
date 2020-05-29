import {
  TODO_GET_TODOS_ACTION,
  COMMON_SET_LOADING_STATUS_MUTATION,
  TODO_SET_TODOS_MUTATION,
  TODO_DELETE_TODO_ACTION,
  TODO_UPDATE_TODO_ACTION,
  TODO_ADD_TODO_ACTION,
  TODO_GET_TODO_BY_ID_ACTION,
  TODO_SET_TODO_MUATION,
  TODO_UPDATE_STATUS_TODO_ACTION,
  TODO_GET_TODOS_BY_KEY_ACTION
} from "../constants";
import toDoService from "../services/toDoService";
import * as ultils from "../ultils/common";
import { TODO_GET_TODOS_PAGINATION_ACTION } from "./constant";
export default {
  async [TODO_GET_TODOS_ACTION]({ commit }) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      const res = await toDoService.getTodosService();
      commit(TODO_SET_TODOS_MUTATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_DELETE_TODO_ACTION]({ commit }, id) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      await toDoService.deleteTodoByIdService(id);
      const res = await toDoService.getTodosService();
      commit(TODO_SET_TODOS_MUTATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_UPDATE_TODO_ACTION]({ commit }, id) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      await toDoService.updateTodoById(id);
      await ultils.redirectTo("/todos");
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_ADD_TODO_ACTION]({ commit }, data) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      toDoService.addTodoService(data);
      ultils.redirectTo("/todos");
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_GET_TODO_BY_ID_ACTION]({ commit }, data) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      const res = await toDoService.getTodoByIdService(data);
      commit(TODO_SET_TODO_MUATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_UPDATE_STATUS_TODO_ACTION]({ commit }, data) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      await toDoService.updateTodoStatusById(data);
      const res = await toDoService.getTodosService();
      commit(TODO_SET_TODOS_MUTATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_GET_TODOS_BY_KEY_ACTION]({ commit }, data) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      const res = await toDoService.searchTodoByKeyService(data);
      commit(TODO_SET_TODOS_MUTATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  },
  async [TODO_GET_TODOS_PAGINATION_ACTION]({ commit }, data) {
    try {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, true);
      const res = await toDoService.getPaginationTodosService(data);
      commit(TODO_SET_TODOS_MUTATION, res);
    } catch (error) {
      console.log("==>", error);
    } finally {
      commit("common/" + COMMON_SET_LOADING_STATUS_MUTATION, false);
    }
  }
};
