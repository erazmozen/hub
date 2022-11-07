import React from "react";

const SingleTodo = ({ icons, todo, checkTodo, deleteTodo }) => {
  console.log("SingleTodo render");
  return (
    <li key={todo.id}>
      <div className="todo-buttons">
        <button onClick={() => checkTodo(todo.id)}>
          <icons.RiCheckDoubleFill
            style={todo.done && { opacity: "1" }}
            className="minus-icon"
          />
        </button>
        {!todo.done && (
          <button onClick={() => deleteTodo(todo.id)}>
            <icons.FiMinusSquare className="minus-icon" />
          </button>
        )}
      </div>
      <h4 className="todo-title">{todo.title}</h4>
    </li>
  );
};

export default SingleTodo;
