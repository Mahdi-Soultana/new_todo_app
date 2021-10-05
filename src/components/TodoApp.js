import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { loadTodosData } from "../redux/todos_Thunk";
import TodoRoute from "./TodoList/TodoRoute";
function TodoApp() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadTodosData());
  }, [dispatch]);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <TodoRoute />
        </Route>
        <Route path="/:filter">
          <TodoRoute />
        </Route>
      </Switch>
    </Layout>
  );
}

export default TodoApp;
