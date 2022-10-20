import "./todo.css";
import { useEffect, useState } from "react";

const Todo = ({ icons, searchInput }) => {
  const [skipRender, setSkipRender] = useState(true);
  const [todos, setTodos] = useState([]);
  const [quarry, setquarry] = useState("");

  function addRandomTodo() {
    const todoTitle = searchInput.current.value;
    if (todoTitle === "") return console.log("you must type the name!");
    setTodos((prev) => [
      ...prev,
      { id: todos.length, title: todoTitle, done: false },
    ]);
    console.log("added new todo, title:", todoTitle);
  }

  const deleteTodo = (index) => {
    const todosFiltered = [...todos].filter((todo) => todo.id !== index);
    console.log("deleted todo, left: ", todosFiltered);
    setTodos(todosFiltered);
  };

  function clearTodo() {
    setTodos([]);
    console.log("cleared all todos");
  }

  function filterTodos() {
    setquarry(searchInput.current.value.toLowerCase());
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    if (skipRender) setSkipRender(false);
    if (!skipRender) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  console.log("Todo render");

  return (
    <div className="todo">
      <div className="todo-icons">
        <icons.FiPlusSquare onClick={addRandomTodo} />
        <icons.FiFilter onClick={filterTodos} />
        <icons.AiOutlineClear onClick={clearTodo} />
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
