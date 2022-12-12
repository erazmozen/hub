import { useState, useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import WordCounter from "../../../common/WordCounter";
import ColorNotes from "./ColorNotes";
import EditNote from "./EditNote";
import "./note.css";

const Note = ({ note }) => {
  const { AiOutlineDelete, MdDateRange } =
    useContext(IconsContext);

  const { dispatch } = useContext(NotesContext);

  const [editNotes, setEditNotes] = useState(false);

  function deleteNote() {
    dispatch({
      type: ACTIONS.DELETE_NOTE,
      payload: { id: note.id },
    });
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
              >
                <AiOutlineDelete size={30} />
              </button>
            </div>
          </div>
          <div className="note-content">
            {!editNotes && <h2>{note.title}</h2>}
            {!editNotes && <p>{note.body}</p>}
          </div>
          {editNotes && <EditNote note={note} />}
        </div>
        <div className="note-footer">
          <WordCounter toCount={note.body} />
          <div className="date-footer">
            <p>{note.date}</p>
            <MdDateRange size={28} />
          </div>

          <ColorNotes note={note} />
        </div>
      </div>
    </div>
  );
};
export default Note;
