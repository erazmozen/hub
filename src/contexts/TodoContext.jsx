import {
  useReducer,
  createContext,
  useEffect,
} from "react";
import {
  reducer,
  initializer,
} from "../components/common/functions/todosReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(
    reducer,
    [],
    initializer
  );

  useEffect(() => {
    localStorage.setItem(
      "test-reducer-todo",
      JSON.stringify(todos)
    );
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
