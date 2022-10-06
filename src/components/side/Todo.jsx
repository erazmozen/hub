const Todo = ({ icons }) => {
  return (
    <div className="todo">
      <div className="todo-icons">
        <icons.FiPlusSquare />
        <icons.FiFilter />
      </div>
      <ul>
        <li>
          <icons.FiMinusSquare className="minus-icon" />
          <h4 className="todo-title">Lets put some</h4>
        </li>
        <li>
          <icons.FiMinusSquare className="minus-icon" />
          <h4 className="todo-title">Random text here</h4>
        </li>
        <li>
          <icons.FiMinusSquare className="minus-icon" />
          <h4 className="todo-title">To show some todos</h4>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
