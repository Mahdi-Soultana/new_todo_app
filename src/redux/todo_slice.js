import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    notification: { status: null },
  },
  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
    loadTodos(state, action) {
      state.todos = action.payload;
    },
    saveTodo(state, action) {
      state.todos.push(action.payload);
    },
    destroyTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo(state, action) {
      let indexTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state.todos[indexTodo] = action.payload;
    },
  },
});

export const todosAction = todoSlice.actions;
export default todoSlice;
