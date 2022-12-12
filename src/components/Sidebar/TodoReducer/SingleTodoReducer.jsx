import { useContext } from "react";
import { IconsContext } from "../../../contexts/IconsContext";
import { ACTIONS } from "../../common/functions/todosReducer";
import "../Todo/todo.css";

const SingleTodoReducer = ({ todo, dispatch }) => {
  const { RiCheckDoubleFill, FiMinusSquare } =
    useContext(IconsContext);
  return (
    <div className="todo-buttons">
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        <RiCheckDoubleFill
          style={todo.done && { opacity: "1" }}
          className="minus-icon"
        />
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        <FiMinusSquare className="minus-icon" />
      </button>
      <p style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.title}
      </p>
    </div>
  );
};

export default SingleTodoReducer;
