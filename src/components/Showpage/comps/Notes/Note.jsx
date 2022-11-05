import { useState } from "react";
import { useRef } from "react";
import WordCounter from "../../../common/WordCounter";
import ColorNotes from "./ColorNotes";
import EditNote from "./EditNote";

const Note = ({ icons, note, deleteNote, setNotesState, notesState }) => {
  const [editNotes, setEditNotes] = useState(false);
  const editInputTitle = useRef();
  const editInputBody = useRef();

  function changeNoteColor(noteColor) {
    const externalId = parseInt(note.id);
    const seledtedNote = [...notesState].map((noteToChange) =>
      noteToChange.id === externalId
        ? { ...noteToChange, color: noteColor }
        : { ...noteToChange }
    );
    setNotesState(seledtedNote);
    console.log("Change Note Color to", noteColor);
  }

  function editNote() {
    const externalId = parseInt(note.id);
    const seledtedNote = [...notesState].map((noteToChange) =>
      noteToChange.id === externalId
        ? {
            ...noteToChange,
            title: editInputTitle.current.value,
            body: editInputBody.current.value,
          }
        : { ...noteToChange }
    );
    setNotesState(seledtedNote);
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
            <div className="notes-body-buttons">
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
                <icons.AiOutlineDelete size={22} />
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
              icons={icons}
              note={note}
              editNote={editNote}
            />
          )}
        </div>
        <div className="note-footer">
          <WordCounter icons={icons} toCount={note.body} />
          <div className="date-footer">
            <p>{note.date}</p>
            <icons.MdDateRange size={28} />
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
export default Note;
