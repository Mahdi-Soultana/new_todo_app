import { configureStore } from "@reduxjs/toolkit";
import TodosStore from "./todo_slice";
const store = configureStore({
  reducer: {
    todos: TodosStore.reducer,
  },
});
export default store;
