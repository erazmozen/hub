import { useRef } from "react";

import useLocalStorage from "../../../common/hooks/useLocalStorage";
import uppercaseFirst from "../../../common/functions/uppercaseFirst";
import NotesForm from "./NotesForm";
import ShowNotes from "./ShowNotes";
import "./notes.css";

const Notes = ({ icons }) => {
  const [notesState, setNotesState] = useLocalStorage("notes-data", []);
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
      titleInput.current.value = "";
      bodyInput.current.value = "";
    }, 100);
  }

  function deleteNote(e) {
    const externalId = parseInt(e.target.id);
    const filteredNotes = notesState.filter((note) => note.id !== externalId);
    setNotesState(filteredNotes);
    console.log("deleting: ", e.target.id);
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
        <div className="note-header">
          <h1>Add a Note</h1>
          <icons.FaRegStickyNote />
        </div>

        <NotesForm
          saveNote={saveNote}
          titleInput={titleInput}
          clearInputs={clearInputs}
          icons={icons}
          clearNotes={clearNotes}
          bodyInput={bodyInput}
        />

        <ShowNotes
          icons={icons}
          deleteNote={deleteNote}
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
