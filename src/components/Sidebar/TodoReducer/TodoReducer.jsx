import { useRef, useContext } from "react";
import { IconsContext } from "../../../contexts/IconsContext";
import { TodoContext } from "../../../contexts/TodoContext";
import { ACTIONS } from "../../common/functions/todosReducer";
import SingleTodo from "../Todo/SingleTodo";
import SingleTodoReducer from "./SingleTodoReducer";

const TodoReducer = () => {
  const { FiPlusSquare, FiFilter, AiOutlineClear } =
    useContext(IconsContext);
  const { todos, dispatch } = useContext(TodoContext);

  const title = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { title: title.current.value },
    });
  }

  console.log(title, todos);
  return (
    <div className=" card todo">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={title} />
        <div className="common-icons-wrapper">
          <FiPlusSquare onClick={handleSubmit} />
          <FiFilter onClick={() => console.log("filter")} />
          <AiOutlineClear
            onClick={() => console.log("clear")}
          />
        </div>
      </form>

      {todos.map((todo) => (
        <SingleTodoReducer
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoReducer;
