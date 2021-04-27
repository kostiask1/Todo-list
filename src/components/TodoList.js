import React, { useContext } from "react";
import { TodoListContext } from "../context/todoList/todoList-context";
import Item from "./Item";
import "./TodoList.css";

export const TodoList = () => {
  const { items, remove, select } = useContext(TodoListContext);
  return (
    <div className="todo-list mt-3">
      {items
        ? items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              item={item}
              handleDelete={remove}
              handleSelect={select}
            />
          ))
        : null}
    </div>
  );
};
