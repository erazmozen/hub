import {
  useReducer,
  createContext,
  useEffect,
  useRef,
} from "react";
import {
  notesInitializer,
  notesReducer,
} from "../components/common/functions/notesReducer";
import { exampleNotes } from "../data/exampleData";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(
    notesReducer,
    exampleNotes,
    notesInitializer
  );

  const titleInput = useRef();
  const bodyInput = useRef();

  const clearInputs = (e) => {
    e.preventDefault();
    titleInput.current.value = "";
    bodyInput.current.value = "";
    console.log("clear inputs");
  };

  useEffect(() => {
    localStorage.setItem(
      "reducer-data-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        clearInputs,
        titleInput,
        bodyInput,
        dispatch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
