import "./todo.css";
import { useState } from "react";
import uppercaseFirst from "../../common/functions/uppercaseFirst";
import useLocalStorage from "../../common/hooks/useLocalStorage";

const Todo = ({ icons, searchInput }) => {
  const [todos, setTodos] = useLocalStorage('todos-data', [])
  const [quarry, setquarry] = useState("");

  function addTodo() {
    const todoTitle = searchInput.current.value;
    if (todoTitle === "") return console.log("you must type a name!");
    setTodos((prev) => [
      ...prev,
      { id: todos.length, title: uppercaseFirst(todoTitle), done: false },
    ]);
    console.log("added new todo, title:", todoTitle);
  }

  const deleteTodo = (index) => {
    const todosFiltered = todos.filter((todo) => todo.id !== index);
    console.log("deleted todo, left: ", todosFiltered);
    setTodos(todosFiltered);
  };

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
      <div className="todo-icons">
        <icons.FiPlusSquare onClick={addTodo} />
        <icons.FiFilter onClick={filterTodos} />
        <icons.AiOutlineClear onClick={clearTodos} />
      </div>
      <ul>
        {todos
          .filter((todo) => todo.title.toLowerCase().includes(quarry))
          .map((todo) => (
            <li key={todo.id}>
              <button onClick={() => deleteTodo(todo.id)}>
                <icons.FiMinusSquare className="minus-icon" />
              </button>
              <h4 className="todo-title">{todo.title}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
