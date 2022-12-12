const initialState = [];

const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("test-reducer-todo")) ||
  initialValue;

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function newTodo(title) {
  return { id: Date.now(), title: title, complete: false };
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.title)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(
        (todo) => todo.id !== action.payload.id
      );
    default:
      break;
  }
}

export { ACTIONS, reducer, initializer };
