import { useState, useRef, memo, useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import WordCounter from "../../../common/WordCounter";
import ColorNotes from "./ColorNotes";
import EditNote from "./EditNote";
import "./note.css";

const Note = ({
  note,
  deleteNote,
  setNotesState,
  notesState,
}) => {
  const { AiOutlineDelete, MdDateRange } =
    useContext(IconsContext);

  const [editNotes, setEditNotes] = useState(false);
  const editInputTitle = useRef();
  const editInputBody = useRef();

  function changeNoteColor(noteColor) {
    const externalId = parseInt(note.id);
    const editedNotes = [...notesState].map(
      (noteToChange) =>
        noteToChange.id === externalId
          ? { ...noteToChange, color: noteColor }
          : { ...noteToChange }
    );
    setNotesState(editedNotes);
    console.log("Change Note Color to", noteColor);
  }

  function editNote() {
    const externalId = parseInt(note.id);
    const editedNotes = [...notesState].map(
      (noteToChange) =>
        noteToChange.id === externalId
          ? {
              ...noteToChange,
              title: editInputTitle.current.value,
              body: editInputBody.current.value,
            }
          : { ...noteToChange }
    );
    setNotesState(editedNotes);
    setEditNotes(!editNotes);
    console.log("Save edited note");
  }

  console.log("Note render");

  return (
    <div key={note.id} className="note">
      <div className="note-body">
        <div className="note-top">
          <div className="note-header">
            {editNotes && <h2>Editing mode</h2>}
            <div className="note-body-buttons">
              <button
                onClick={() => {
                  setEditNotes(!editNotes);
                }}
                className="common-button"
                style={{ background: note.color }}
              >
                E
              </button>
              <button
                className="common-button"
                style={{ background: note.color }}
                onClick={deleteNote}
                id={note.id}
              >
                <AiOutlineDelete size={30} />
              </button>
            </div>
          </div>
          <div className="note-content">
            {!editNotes && <h2>{note.title}</h2>}
            {!editNotes && <p>{note.body}</p>}
          </div>
          {editNotes && (
            <EditNote
              editInputTitle={editInputTitle}
              editInputBody={editInputBody}
              note={note}
              editNote={editNote}
            />
          )}
        </div>
        <div className="note-footer">
          <WordCounter toCount={note.body} />
          <div className="date-footer">
            <p>{note.date}</p>
            <MdDateRange size={28} />
          </div>

          <ColorNotes
            note={note}
            colorOfNote={note.color}
            noteId={note.id}
            changeNoteColor={changeNoteColor}
          />
        </div>
      </div>
    </div>
  );
};
export default memo(Note);
