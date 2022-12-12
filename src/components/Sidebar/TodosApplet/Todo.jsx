import { useContext } from "react";
import { IconsContext } from "../../../contexts/IconsContext";
import { ACTIONS } from "../../common/functions/todosReducer";
import "./todo.css";

const Todo = ({ todo, dispatch }) => {
  const { RiCheckDoubleFill, FiMinusSquare } =
    useContext(IconsContext);
  return (
    <div className="single-todo-wrapper">
      <div className="common-icons-wrapper">
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          <RiCheckDoubleFill
            style={todo.complete && { opacity: "1" }}
            className="icon"
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
          <FiMinusSquare className="icon" />
        </button>
      </div>
      <p style={{ color: todo.complete ? "gray" : "#FFF" }}>
        {todo.title}
      </p>
    </div>
  );
};

export default Todo;
