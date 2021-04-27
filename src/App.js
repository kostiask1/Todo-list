import React, { useContext, useEffect, useRef } from "react";
import "./App.scss";
import { TodoList } from "./components/TodoList";
import { TodoListContext } from "./context/todoList/todoList-context";

function App() {
  const {
    store,
    filt,
    getItems,
    setItems,
    clear,
    filter,
    addItem,
    filler,
  } = useContext(TodoListContext);
  const inputValue = useRef();

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setItems();
    // eslint-disable-next-line
  }, [store]);

  const submitHandler = (e) => {
    e.preventDefault();
    addItem(e);
    setItems();
  };

  return (
    <div className="container mt-5">
      <div className="card card-white">
        <div className="card-body">
          <div className="row ">
            <form
              className="d-flex justify-content-between flex-grow-1"
              onSubmit={(e) => submitHandler(e)}
              action="/"
            >
              <div className="col-9">
                <input
                  ref={inputValue}
                  type="text"
                  className="form-control add-task"
                  placeholder="Add task..."
                />
              </div>
              <div className="col-3 d-flex justify-content-end">
                <button
                  className="btn btn-sm btn-success mr-1 fs-6 flex-grow-1"
                  type="submit"
                >
                  Add task
                </button>
                <button
                  onClick={() => filler()}
                  className="btn btn-sm btn-primary flex-grow-1"
                >
                  Load filler
                </button>
              </div>
            </form>

            <div className="col-12">
              <ul className="nav nav-pills todo-nav mt-3">
                <li role="presentation" className="nav-item all-task active">
                  <button
                    onClick={() => getItems()}
                    className="btn btn-sm btn-primary mr-2"
                  >
                    All
                  </button>
                </li>
                <li role="presentation" className="nav-item active-task">
                  <button
                    onClick={() => filt(filter(false))}
                    className="btn btn-sm btn-light mr-2"
                  >
                    Active
                  </button>
                </li>
                <li role="presentation" className="nav-item completed-task">
                  <button
                    onClick={() => filt(filter(true))}
                    className="btn btn-sm btn-light mr-2"
                  >
                    Completed
                  </button>
                </li>
                <li role="presentation" className="nav-item completed-task">
                  <button
                    onClick={() => clear(true)}
                    className="btn btn-sm btn-warning mr-2"
                  >
                    Clear Completed
                  </button>
                </li>
                <li role="presentation" className="nav-item completed-task">
                  <button
                    onClick={() => clear()}
                    className="btn btn-sm btn-danger mr-2"
                  >
                    Clear All
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
