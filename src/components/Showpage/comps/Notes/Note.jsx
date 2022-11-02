import WordCounter from "../../../common/WordCounter";
import ColorNotes from "./ColorNotes";

const Note = ({ icons, note, deleteNote, setNotesState, notesState }) => {
  function changeNoteColor(noteId, noteColor) {
    const externalId = parseInt(noteId);
    setNotesState(
      notesState.map((note) =>
        note.id === externalId ? { ...note, color: noteColor } : { ...note }
      )
    );
    console.log("Change Note Color to", noteColor);
  }

  console.log("Note render");

  return (
    <div key={note.id} className="note">
      <div className="note-body">
        <button className="common-button" onClick={deleteNote} id={note.id}>
          <icons.AiOutlineDelete size={22} />
        </button>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
      <div className="note-footer">
        <WordCounter icons={icons} toCount={note.body} />
        <div className="date-footer">
          {note.date}
          <icons.MdDateRange />
        </div>
      </div>
      <ColorNotes
        note={note}
        color={note.color || "black"}
        id={note.id}
        changeNoteColor={changeNoteColor}
      />
    </div>
  );
};
export default Note;
