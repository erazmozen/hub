import { useRef } from "react";
import TodoContainer from "./TodoContainer";

const OldTodo = () => {
  const searchInput = useRef("");
  return (
    <div>
      <div className="search-wrapper">
        <input
          className="common-input"
          ref={searchInput}
          placeholder="Search"
        />
      </div>
      <TodoContainer searchInput={searchInput} />
    </div>
  );
};

export default OldTodo;
