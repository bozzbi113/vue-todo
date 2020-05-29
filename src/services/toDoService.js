import apiCaller from "../ultils/apiCaller";

const todoService = (function() {
  const updateTodoStatusById = data => {
    data.done = true;
    return apiCaller.put(`/todos/${data.id}`, data);
  };

  const updateTodoById = data => {
    return apiCaller.put(`/todos/${data.id}`, data);
  };

  const getTodosService = () => {
    return apiCaller.get("/todos");
  };

  const deleteTodoByIdService = id => {
    return apiCaller.delete("/todos/" + id);
  };

  const updateTodoByIdService = data => {
    return apiCaller.put(`/todos/${data.id}`, data);
  };

  const addTodoService = data => {
    return apiCaller.post("/todos", data);
  };

  const getTodoByIdService = id => {
    return apiCaller.get("/todos/" + id);
  };

  const searchTodoByKeyService = data => {
    return apiCaller.get("/todos", data);
  };

  const getPaginationTodosService = data => {
    data["_page"] = data.page;
    data["_limit"] = data.limit;
    delete data.page;
    delete data.limit;
    return apiCaller.get("/todos", data);
  };

  return {
    addTodoService,
    updateTodoByIdService,
    getTodosService,
    deleteTodoByIdService,
    updateTodoStatusById,
    getTodoByIdService,
    updateTodoById,
    searchTodoByKeyService,
    getPaginationTodosService
  };
})();

export default todoService;
