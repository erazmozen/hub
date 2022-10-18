import { useEffect, useRef, useState } from "react";
import "../css/side/notes.css";

const Notes = ({ icons }) => {
  const [bodyHeight, setBodyHeight] = useState("200px");
  const titleInput = useRef();
  const bodyInput = useRef();

  const heightClass = {
    transition: "height 0.3s ease",
    height: `${bodyHeight}`,
  };

  const notes = [
    { id: 122312, title: "title1", body: "body", date: "2321122" },
    { id: 123212, title: "title", body: "body", date: "2321122" },
    { id: 1231312, title: "title", body: "body", date: "2321122" },
  ];

  const buttons = [
    {
      id: 1,
      value: "200px",
      icon: <icons.TbArrowsDiagonalMinimize size={18} />,
    },
    {
      id: 2,
      value: "400px",
      icon: <icons.TbArrowsDiagonal2 size={18} />,
    },
    {
      id: 3,
      value: "700px",
      icon: <icons.FiMaximize size={18} />,
    },
  ];

  function changeHeight(e) {
    e.preventDefault();
    // setBodyHeight(e.target.value);
    if (bodyHeight === e.target.value) {
      console.log("Value is same, exiting function...");
      return;
    }
    setBodyHeight(() => e.target.value);
    console.log("Value is not the same, setting state to ", e.target.value);
  }

  console.log("Notes render");

  return (
    <div className="notes">
      <form>
        <input
          ref={titleInput}
          placeholder="Title"
          className="common-input"
        ></input>

        <div className="toggles-wrapper">
          {buttons.map((button) => (
            <button
              key={button.id}
              value={button.value}
              className="common-button"
              onClick={changeHeight}
            >
              {button.icon}
            </button>
          ))}

          <button className="common-button">
            <icons.AiOutlineClear size={18} />
          </button>
        </div>

        <textarea
          ref={bodyInput}
          placeholder="Body"
          className={`common-input textarea-body`}
          style={heightClass}
        />

        <button className="common-button" type="submit">
          Save
        </button>
      </form>

      <h1 style={{ marginTop: "1.4rem" }}>Saved notes:</h1>

      <div className="notes-wrapper">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <p>{note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
