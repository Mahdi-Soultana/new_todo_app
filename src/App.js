import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <TodoApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
