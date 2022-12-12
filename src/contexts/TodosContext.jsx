import {
  useReducer,
  createContext,
  useEffect,
} from "react";
import {
  reducer,
  initializer,
} from "../components/common/functions/todosReducer";
import { exampleTodos } from "../data/exampleData";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(
    reducer,
    exampleTodos,
    initializer
  );

  useEffect(() => {
    localStorage.setItem(
      "data-todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
