import { useState } from "react";

const Todo = ({ icons, searchInput }) => {
  const [todos, setTodos] = useState([
    { title: "Lets put some" },
    { title: "Random text here" },
    { title: "To show some todos" },
  ]);

  function addRandomTodo() {
    console.log("add random todo");
    const todoTitle = searchInput.current.value;
    if (todoTitle === "") return;
    setTodos((prev) => [...prev, { title: todoTitle }]);
  }

  return (
    <div className="todo">
      <div className="todo-icons">
        <icons.FiPlusSquare onClick={addRandomTodo} />
        <icons.FiFilter />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <icons.FiMinusSquare className="minus-icon" />
            <h4 className="todo-title">{todo.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
