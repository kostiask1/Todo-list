import { ADD_TO_TODO_LIST, CLEAR, FILTER } from "../types";

const handlers = {
  [ADD_TO_TODO_LIST]: (state, { payload }) => ({
    ...state,
    items: payload,
    store: payload,
  }),
  [FILTER]: (state, { payload }) => ({
    ...state,
    items: payload,
  }),
  [CLEAR]: (state, { payload }) => ({
    ...state,
    store: payload ?? [],
  }),
  DEFAULT: (state) => state,
};

export const todoListReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
