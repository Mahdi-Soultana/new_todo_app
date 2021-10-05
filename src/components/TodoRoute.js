import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";
import { useLocation, Redirect, Route } from "react-router";

function TodoRoute(props) {
  const todos = useSelector((state) => state.todos.todos);
  const location = useLocation();
  let todosItems;
  switch (location.pathname) {
    case "/":
      todosItems = todos;
      break;
    case "/completed":
      todosItems = todos.filter((todo) => todo.isComplete);
      break;
    case "/active":
      todosItems = todosItems = todos.filter((todo) => !todo.isComplete);
      break;

    default:
      todosItems = [];
  }
  let content;
  if (todos.length) {
    content = <TodoList todosItems={todosItems} />;
  } else {
    content = (
      <Route excat path="/:id">
        <Redirect to="/" /> }
      </Route>
    );
  }
  return content;
}

export default TodoRoute;
