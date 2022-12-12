import { useContext, useState } from "react";
import { IconsContext } from "../../../contexts/IconsContext";
import { TodoContext } from "../../../contexts/TodosContext";
import { ACTIONS } from "../../common/functions/todosReducer";
import Todo from "./Todo";
import "./todosapplet.css";

const TodoApplet = () => {
  const { FiPlusSquare, FiFilter, AiOutlineClear } =
    useContext(IconsContext);

  const { todos, dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { title: title },
    });
    setTitle("");
  }

  console.log(title, todos);
  return (
    <div className="todo-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="common-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

      <div className="common-icons-wrapper">
        <FiPlusSquare onClick={handleSubmit} />
        <AiOutlineClear
          onClick={() =>
            dispatch({ type: ACTIONS.CLEAR_ALL })
          }
        />
        <FiFilter
          style={{
            color: searchToggle
              ? "rgba(255,255,255, 1)"
              : "rgba(255,255,255, .4)",
          }}
          onClick={() => setSearchToggle((prev) => !prev)}
        />
      </div>

      <h3>Todos:</h3>

      {searchToggle
        ? todos
            .filter((todo) =>
              todo.title
                .toLowerCase()
                .includes(title.toLowerCase())
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
              />
            ))
        : todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              dispatch={dispatch}
            />
          ))}
    </div>
  );
};

export default TodoApplet;
