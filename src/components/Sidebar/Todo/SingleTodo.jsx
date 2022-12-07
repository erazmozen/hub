import { useContext } from "react";
import { IconsContext } from "../../../contexts/IconsContext";

const SingleTodo = ({ todo, checkTodo, deleteTodo }) => {
  const { RiCheckDoubleFill, FiMinusSquare } =
    useContext(IconsContext);
  console.log("SingleTodo render");
  return (
    <li key={todo.id}>
      <div className="todo-buttons">
        <button onClick={() => checkTodo(todo.id)}>
          <RiCheckDoubleFill
            style={todo.done && { opacity: "1" }}
            className="minus-icon"
          />
        </button>
        {!todo.done && (
          <button onClick={() => deleteTodo(todo.id)}>
            <FiMinusSquare className="minus-icon" />
          </button>
        )}
      </div>
      <h4 className="todo-title">{todo.title}</h4>
    </li>
  );
};

export default SingleTodo;
