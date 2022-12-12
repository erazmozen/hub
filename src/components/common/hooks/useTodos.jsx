import { useReducer, useRef } from "react";
import {
  INITIAL_STATE,
  todoReducer,
} from "../functions/todosReducer";

export const useTodos = () => {
  const [state, dispatch] = useReducer(
    todoReducer,
    INITIAL_STATE
  );

  const addTodo = (searchInput) => {
    dispatch({ type: "ADD_TODO", payload: "random" });
  };
  // const completeTodo = () => {};
  // const deleteTodo = () => {};

  return [state.todos, addTodo];
};
