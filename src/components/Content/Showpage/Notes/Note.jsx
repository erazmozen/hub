import { useState, useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import WordCounter from "../../../common/components/WordCounter";
import ColorNotes from "./ColorNotes";
import Button from "../../../common/components/Button";
import EditNote from "./EditNote";
import "./note.css";

const Note = ({ note }) => {
  const {
    AiOutlineDelete,
    MdDateRange,
    FaPaintBrush,
    HiDuplicate,
  } = useContext(IconsContext);

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
    <div className="note">
      <div className="note-body">
        <div className="note-top">
          <div className="note-header">
            {editNotes && <h2>Editing mode</h2>}
            <div className="note-body-buttons">
              <Button
                style={{ background: note.color }}
                icon={<FaPaintBrush size={26} />}
                onClick={() => {
                  setEditNotes(!editNotes);
                }}
              />
              <Button
                style={{ background: note.color }}
                icon={<AiOutlineDelete size={30} />}
                onClick={deleteNote}
              />
              <Button
                style={{ background: note.color }}
                icon={<HiDuplicate size={30} />}
                onClick={() => {
                  dispatch({
                    type: ACTIONS.COPY_NOTE,
                    payload: { note: note },
                  });
                }}
              />
            </div>
          </div>
          <div className="note-content">
            {!editNotes && <h2>{note.title}</h2>}
            {!editNotes && <p>{note.body}</p>}
          </div>
          {editNotes && (
            <EditNote
              note={note}
              setEditNotes={setEditNotes}
            />
          )}
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
