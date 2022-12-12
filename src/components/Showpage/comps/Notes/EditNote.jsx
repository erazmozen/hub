import { useContext, useRef } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import "./editnotes.css";

const EditNote = ({ note }) => {
  const { MdOutlineSave } = useContext(IconsContext);

  const { dispatch } = useContext(NotesContext);
  const editInputTitle = useRef();
  const editInputBody = useRef();

  function editNote() {
    dispatch({
      type: ACTIONS.EDIT_NOTE,
      payload: {
        id: note.id,
        title: editInputTitle.current.value,
        body: editInputBody.current.value,
      },
    });
  }

  console.log("EditNote render");

  return (
    <div
      style={{
        background: note.color,
      }}
      className="edit-notes"
    >
      <div className="topbar">
        <input
          ref={editInputTitle}
          type="text"
          className="common-input"
          defaultValue={note.title}
        />
        <button className="common-input" onClick={editNote}>
          <MdOutlineSave />
        </button>
      </div>
      <textarea
        ref={editInputBody}
        className="common-input"
        defaultValue={note.body}
      ></textarea>
    </div>
  );
};

export default EditNote;
