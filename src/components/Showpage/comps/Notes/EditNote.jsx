import React from "react";

const EditNote = ({ icons, note, editInputTitle, editInputBody, editNote }) => {
  console.log("EditNote render");

  return (
    <div
      style={{
        background: note.color,
      }}
      className="fullscreen transition-bg"
    >
      <div className="topbar">
        <input
          ref={editInputTitle}
          type="text"
          className="common-input"
          defaultValue={note.title}
        />
        <button className="common-input" onClick={editNote}>
          <icons.MdOutlineSave />
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
