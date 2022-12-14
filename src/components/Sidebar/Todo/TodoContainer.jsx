import { useState, useContext } from "react";
import { exampleTodos } from "../../../data/exampleData.js";
import { IconsContext } from "../../../contexts/IconsContext";
import SingleTodo from "./SingleTodo";
import uppercaseFirst from "../../common/functions/uppercaseFirst";
import useLocalStorage from "../../common/hooks/useLocalStorage";
import "./todo.css";

const Todo = ({ searchInput }) => {
  const { FiPlusSquare, FiFilter, AiOutlineClear } =
    useContext(IconsContext);
  const [todos, setTodos] = useLocalStorage(
    "todos-data",
    exampleTodos
  );
  const [quarry, setquarry] = useState("");

  function addTodo() {
    const todoTitle = searchInput.current.value;
    if (todoTitle === "")
      return console.log("you must type a name!");
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length,
        title: uppercaseFirst(todoTitle),
        done: false,
      },
    ]);
    console.log("added new todo, title:", todoTitle);
  }

  const deleteTodo = (index) => {
    const todosFiltered = todos.filter(
      (todo) => todo.id !== index
    );
    console.log("deleted todo, left: ", todosFiltered);
    setTodos(todosFiltered);
  };

  function checkTodo(index) {
    const editTodo = todos.map((todo) =>
      todo.id === index
        ? { ...todo, done: !todo.done }
        : { ...todo }
    );
    setTodos(editTodo);
  }

  function clearTodos() {
    setTodos([]);
    console.log("cleared all todos");
  }

  function filterTodos() {
    setquarry(searchInput.current.value.toLowerCase());
  }

  console.log("Todo render");

  return (
    <div className="todo">
      <div className="common-icons-wrapper">
        <FiPlusSquare onClick={addTodo} />
        <FiFilter onClick={filterTodos} />
        <AiOutlineClear onClick={clearTodos} />
      </div>
      <ul>
        <h4>Todos:</h4>
        {todos
          .filter((todo) =>
            todo.title.toLowerCase().includes(quarry)
          )
          .map(
            (todo, index) =>
              !todo.done && (
                <SingleTodo
                  key={index}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  checkTodo={checkTodo}
                />
              )
          )}
      </ul>

      <ul className="done-todos">
        <h4>Done todos:</h4>
        {todos.map(
          (todo, index) =>
            todo.done && (
              <SingleTodo
                key={index}
                todo={todo}
                deleteTodo={deleteTodo}
                checkTodo={checkTodo}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default Todo;
