// State
let state = {
  todos: [],
};

// Getters
let getters = {
  TODOS: (state) => state.todos,
};

// Mutations
let mutations = {
  FILTER_TODOS(state, payload) {
    state.todos = state.todos.filter(payload);
  },
  ADD_TODO(state, payload) {
    state.todos = payload;
  },
  CLEAR_TODOS(state) {
    state.todos = [];
  },
};

// Actions
let actions = {
  GET_TODO: ({ commit }) => {
    try {
      let todos = JSON.parse(sessionStorage.getItem("todos"));
      if (todos === null) {
        sessionStorage.clear();
        sessionStorage.setItem("todos", JSON.stringify([]));
      }
      commit("ADD_TODO", JSON.parse(sessionStorage.getItem("todos")));
    } catch (e) {
      alert(e.message);
    }
  },

  SAVE_TODO: ({ commit }, payload) => {
    if (state.todos.length === 5) return alert("Limit!");
    commit("ADD_TODO", [...state.todos, payload]);
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },

  CLEAR_TODOS: ({ commit }) => {
    commit("CLEAR_TODOS");
    sessionStorage.clear();
  },

  CLEAR_COMPLETED: ({ commit }) => {
    commit("FILTER_TODOS", ({ isDone }) => !isDone);
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },

  REMOVE_TODO: ({ commit }, payload) => {
    commit("FILTER_TODOS", ({ id }) => id !== payload);
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },

  SET_TODO_DONE: ({ commit }, payload) => {
    commit("FILTER_TODOS", (todo) => {
      if (todo.id === payload) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    sessionStorage.setItem("todos", JSON.stringify(state.todos));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
