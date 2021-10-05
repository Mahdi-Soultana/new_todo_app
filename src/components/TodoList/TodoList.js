import React from "react";
import TodoItem from "../TodoItem/TodoItem";
// import   from "react-redux";

function TodoList({ todosItems = [] }) {
  return (
    <ul className="todo-list">
      {todosItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
