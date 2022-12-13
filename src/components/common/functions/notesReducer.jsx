import uppercaseFirst from "./uppercaseFirst";

const initialState = [];

const notesInitializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("reducer-data-notes")) ||
  initialValue;

const ACTIONS = {
  ADD_NOTE: "add_note",
  DELETE_NOTE: "delete_note",
  CHANGE_COLOR: "change_color_note",
  EDIT_NOTE: "edit_note",
  COPY_NOTE: "make_copy_note",
  CLEAR_ALL: "clear_all_note",
};

function newNote(title, body) {
  return {
    id: Math.floor(Math.random() * 100000),
    title: uppercaseFirst(title),
    body: uppercaseFirst(body),
    date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
    color: "black",
  };
}

function notesReducer(notes, action) {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      return [
        ...notes,
        newNote(action.payload.title, action.payload.body),
      ];

    case ACTIONS.CLEAR_ALL:
      return [];

    case ACTIONS.CHANGE_COLOR:
      return notes.map((note) =>
        note.id === action.payload.id
          ? { ...note, color: action.payload.color }
          : { ...note }
      );

    case ACTIONS.DELETE_NOTE:
      return notes.filter(
        (note) => note.id !== action.payload.id
      );

    case ACTIONS.COPY_NOTE:
      const focusNote = notes.filter(
        (note) => note.id === action.payload.note.id
      );
      return [
        ...notes,
        newNote(focusNote[0].title, focusNote[0].body),
      ];

    case ACTIONS.EDIT_NOTE:
      return notes.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              body: action.payload.body,
            }
          : { ...note }
      );

    default:
      break;
  }
}

export { ACTIONS, notesReducer, notesInitializer };
