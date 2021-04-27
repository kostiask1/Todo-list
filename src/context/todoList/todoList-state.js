import React, { useReducer } from "react";
import { ADD_TO_TODO_LIST, CLEAR, FILTER } from "../types";
import { TodoListContext } from "./todoList-context";
import { todoListReducer } from "./todoList-reducer";
import { v4 as uuidv4 } from "uuid";
import data from "./../../db/todoList.json"

const LOCAL_STORAGE_KEY = "todo_app";

export const TodoListState = ({ children }) => {
  const initialState = {
    items: [],
    store: [],
  };
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const show = (value) =>
    dispatch({
      type: ADD_TO_TODO_LIST,
      payload: value,
    });

  const filt = (value) =>
    dispatch({
      type: FILTER,
      payload: value,
    });

  const clear = (value) => {
    value
      ? dispatch({ type: CLEAR, payload: filter(false) })
      : dispatch({ type: CLEAR, payload: null });
    setTimeout(() => {
      getItems();
    }, 0);
  };

  const select = (id) => {
    const newItems = [...store];
    const item = newItems.find((item) => item.id === id);
    item.checked = !item.checked;
    show(newItems);
  };

  const remove = (id) => {
    const newItems = [...store];
    const item = newItems.filter((item) => item.id === id);
    newItems.splice(newItems.indexOf(item[0]), 1);
    show(newItems);
  };

  const filter = (value) => {
    const newItems = [...store];
    show(store);
    let filteredData = [];
    if (items) {
      filteredData = newItems.filter((i) => i.checked === value);
    }
    return filteredData;
  };

  const getItems = () => {
    let storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    storage = storage ?? data;
    show(storage);
  };

  const setItems = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store));
  };

  const addItem = (e) => {
    if (e.target[0].value) {
      show(
        store.concat({ checked: false, text: e.target[0].value, id: uuidv4() })
      );
    }
  };

  const filler = () => 
    dispatch({
      type: ADD_TO_TODO_LIST,
      payload: data,
    });
  

  const { items, store } = state;

  return (
    <TodoListContext.Provider
      value={{
        store,
        items,
        getItems,
        setItems,
        show,
        addItem,
        filter,
        remove,
        clear,
        filt,
        filler,
        select,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
