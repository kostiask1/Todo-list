import React from "react";
import { TodoListContext } from "../context/todoList/todoList-context";

function Item({ item, id }) {
  const { select, remove } = React.useContext(TodoListContext);

  function onSelect() {
    select(id);
  }
  function onDelete() {
    remove(id);
  }

  return (
    <li className={`item-item justify-content-between d-flex`} key={id}>
      <div className="checker">
        <input
          type="checkbox"
          id={id}
          checked={item.checked}
          onChange={onSelect}
        />
        <label htmlFor={id} role="button" className=" m-0 p-3 span">
          {item.text}
        </label>
      </div>
      <button onClick={onDelete} className="btn">
        x
      </button>
    </li>
  );
}

export default Item;
