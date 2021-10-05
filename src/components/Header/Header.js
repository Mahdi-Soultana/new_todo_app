import React from "react";
import TodoForm from "../TodoForm/TodoForm";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      {/* {this.state.error ? <span className="error">Oh no!</span> : null}   */}
      <TodoForm
      // currentTodo={state.currentTodo}
      // handleTodoSubmit={handleTodoSubmit}
      // handleNewTodoChange={handleNewTodoChange}
      />
    </header>
  );
}

export default Header;
