import { v4 as uuidv4 } from "uuid";
import {
  loadTodos as requestTodos,
  saveTodo as requestSaveTodo,
  destroyTodo as requestDestroyTodo,
  updateTodo as requestUpdateTodo,
} from "../lib/service";
import { todosAction } from "./todo_slice";

export const loadTodosData = () => {
  return async (dispatch) => {
    dispatch(
      todosAction.setNotification({
        status: "pending",
      }),
    );
    try {
      const { data } = await requestTodos();
      if (!data) {
        throw new Error("something wrong !!");
      }
      dispatch(todosAction.loadTodos(data));
      dispatch(todosAction.setNotification({ status: "success" }));
    } catch (error) {
      console.log(error);
      todosAction.setNotification({
        status: "error",
      });
    }
  };
};
export const saveTodo = (todoValue) => {
  return async (dispatch) => {
    dispatch(
      todosAction.setNotification({
        status: "pending",
      }),
    );
    try {
      const todo = {
        name: todoValue,
        isComplete: false,
        id: uuidv4(),
      };
      dispatch(todosAction.saveTodo(todo));
      await requestSaveTodo(todo);

      dispatch(todosAction.setNotification({ status: "success" }));
    } catch (error) {
      console.log(error);
      todosAction.setNotification({
        status: "error",
      });
    }
  };
};
export const updateTodo = (todo) => {
  return async (dispatch) => {
    dispatch(
      todosAction.setNotification({
        status: "pending",
      }),
    );
    try {
      dispatch(todosAction.updateTodo(todo));
      await requestUpdateTodo(todo);

      dispatch(todosAction.setNotification({ status: "success" }));
    } catch (error) {
      console.log(error);
      todosAction.setNotification({
        status: "error",
      });
    }
  };
};
export const destroyTodo = (id) => {
  return async (dispatch) => {
    dispatch(
      todosAction.setNotification({
        status: "pending",
      }),
    );

    try {
      dispatch(todosAction.destroyTodo(id));
      await requestDestroyTodo(id);

      dispatch(todosAction.setNotification({ status: "success" }));
    } catch (error) {
      console.log(error);
      todosAction.setNotification({
        status: "error",
      });
    }
  };
};
