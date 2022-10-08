import "../css/side/todo.css";
import { useState } from "react";

const Todo = ({ icons, searchInput }) => {
  const [todos, setTodos] = useState([
    { id: 0, title: "Lets put some" },
    { id: 1, title: "Random text here" },
    { id: 2, title: "To show some todos" },
  ]);

  function addRandomTodo() {
    const todoTitle = searchInput.current.value;
    if (todoTitle === "") return console.log('you must type the name!');
    setTodos((prev) => [...prev, { id: todos.length, title: todoTitle }]);
    console.log('added new todo, title:', todoTitle)
  }

  const deleteTodo = (index) => {
    const todosFiltered = [...todos].filter((todo) => todo.id !== index);
    console.log('deleted todo, left: ', todosFiltered);
    setTodos(todosFiltered);
  };

  function clearTodo() {
    setTodos([]);
    console.log('cleared all todos')
  }

  console.log('Todo render')

  return (
    <div className="todo">
      <div className="todo-icons">
        <icons.FiPlusSquare onClick={addRandomTodo} />
        <icons.FiFilter />
        <icons.AiOutlineClear onClick={clearTodo} />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
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
