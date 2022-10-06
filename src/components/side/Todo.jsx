import { useState } from "react";

const Todo = ({ icons }) => {
  const [todos, setTodos] = useState([
    { title: "Lets put some" },
    { title: "Random text here" },
    { title: "To show some todos" },
  ]);

  return (
    <div className="todo">
      <div className="todo-icons">
        <icons.FiPlusSquare />
        <icons.FiFilter />
      </div>
      <ul>
        {todos.map((todo) => (
          <li>
            <icons.FiMinusSquare className="minus-icon" />
            <h4 className="todo-title">{todo.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
