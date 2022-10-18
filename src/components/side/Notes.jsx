import { useEffect, useRef, useState } from "react";
import "../css/side/notes.css";
import WordCounter from "./WordCounter";

const Notes = ({ icons }) => {
  const [bodyHeight, setBodyHeight] = useState("200px");
  const titleInput = useRef();
  const bodyInput = useRef();

  const [skipRender, setSkipRender] = useState(true);

  const [notesState, setNotesState] = useState([]);

  const heightClass = {
    transition: "height 0.3s ease",
    height: `${bodyHeight}`,
  };

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
    if (bodyHeight === e.target.value) {
      console.log("Value is same, exiting function...");
      return;
    }
    setBodyHeight(() => e.target.value);
    console.log("Value is not the same, setting state to ", e.target.value);
  }

  function saveNote(e) {
    e.preventDefault();
    console.log("Form submit");
    setNotesState((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100000),
        title:
          titleInput.current.value.charAt(0).toUpperCase() +
          titleInput.current.value.slice(1),
        body:
          bodyInput.current.value.charAt(0).toUpperCase() +
          bodyInput.current.value.slice(1),
        date: `${new Date().getDate()}. ${new Date().getDay()}. ${new Date().getFullYear()}.`,
      },
    ]);
  }

  const clearInputs = (e) => {
    console.log("clearig inputs");
    e.preventDefault();
    titleInput.current.value = "";
    bodyInput.current.value = "";
  };

  function clearNotes(e) {
    e.preventDefault();
    setNotesState([]);
  }

  function deleteNote(e) {
    console.log("brisemo note sa id: ", e.target.id);
    const externalId = e.target.id;
    const filteredNotes = notesState.filter((note) => note.id != externalId);
    setNotesState(filteredNotes);
  }

  useEffect(() => {
    console.log("useEffect [notes]");
    if (skipRender) setSkipRender(false);
    if (!skipRender) {
      console.log("useEffect set note");
      localStorage.setItem("notes", JSON.stringify(notesState));
      titleInput.current.value = "";
      bodyInput.current.value = "";
    }
  }, [notesState]);

  useEffect(() => {
    console.log("useEffect []");
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    console.log("notes we get from local storage: ", savedNotes);
    setNotesState(savedNotes);
    console.log("saved local notes to notes state");
  }, []);

  console.log("Notes render");

  return (
    <div className="notes">
      <form onSubmit={saveNote}>
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

          <button className="common-button" onClick={clearInputs}>
            <icons.BsEraserFill size={18} />
          </button>
          <button className="common-button" onClick={clearNotes}>
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
        {notesState.map((note) => (
          <div key={note.id} className="note">
            <div className="note-body">
              <button
                className="common-button"
                onClick={deleteNote}
                id={note.id}
              >
                <icons.AiOutlineDelete size={22} />
              </button>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </div>
            <div className="note-footer">
              <WordCounter icons={icons} toCount={note.body} />
              <div className="date-footer">
                <icons.MdDateRange />
                {note.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;