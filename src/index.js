import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import { TodoListState } from "./context/todoList/todoList-state";

ReactDOM.render(
  <React.StrictMode>
    <TodoListState>
      <App />
    </TodoListState>
  </React.StrictMode>,
  document.getElementById("root")
);
