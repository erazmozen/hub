const initialState = [];

const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("data-todos")) ||
  initialValue;

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
  FILTER_TODO: "filter_todo",
  CLEAR_ALL: "clearall_todo",
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
    case ACTIONS.CLEAR_ALL:
      return [];
    default:
      break;
  }
}

export { ACTIONS, reducer, initializer };
