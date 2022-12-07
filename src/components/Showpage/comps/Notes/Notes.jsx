import { useContext, useRef } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import { exampleNotes } from "../../../../data/exampleData";
import useLocalStorage from "../../../common/hooks/useLocalStorage";
import uppercaseFirst from "../../../common/functions/uppercaseFirst";
import NotesForm from "./NotesForm";
import ShowNotes from "./ShowNotes";
import "./notes.css";

const Notes = () => {
  const { FaRegStickyNote } = useContext(IconsContext);
  const [notesState, setNotesState] = useLocalStorage(
    "notes-data",
    exampleNotes
  );
  const titleInput = useRef();
  const bodyInput = useRef();

  function saveNote(e) {
    e.preventDefault();
    console.log("Form submit");
    setNotesState((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100000),
        title: uppercaseFirst(titleInput.current.value),
        body: uppercaseFirst(bodyInput.current.value),
        date: `${new Date().getDate()}. ${new Date().getMonth()}. ${new Date().getFullYear()}.`,
        color: "black",
      },
    ]);
    setTimeout(() => {
      clearInputs(e);
    }, 100);
  }

  function clearNotes(e) {
    e.preventDefault();
    setNotesState([]);
    console.log("clear notes");
  }

  const clearInputs = (e) => {
    e.preventDefault();
    titleInput.current.value = "";
    bodyInput.current.value = "";
    console.log("clear inputs");
  };

  console.log("Notes render");

  return (
    <div className="notes-wrapper">
      <div className="notes">
        <div className="notes-header">
          <h1>Add a Note</h1>
          <FaRegStickyNote />
        </div>

        <NotesForm
          saveNote={saveNote}
          titleInput={titleInput}
          clearInputs={clearInputs}
          clearNotes={clearNotes}
          bodyInput={bodyInput}
        />

        <ShowNotes
          notesState={notesState}
          titleInput={titleInput}
          bodyInput={bodyInput}
          setNotesState={setNotesState}
        />
      </div>
    </div>
  );
};

export default Notes;
