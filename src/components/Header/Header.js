import React from "react";
import TodoForm from "../TodoForm/TodoForm";

import { useSelector } from "react-redux";

function Header() {
  const notification = useSelector((state) => state.todos.notification);

  let content;
  if (notification.status === "pending") {
    content = null;
  } else if (notification.status === "error") {
    content = (
      <span className="error"> server down! but the APP still Work :) </span>
    );
  }
  return (
    <header className="header">
      <h1>todos</h1>
      {content}
      <TodoForm />
    </header>
  );
}

export default Header;
