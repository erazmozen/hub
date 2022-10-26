import { useEffect, useRef, useState } from "react";
import WordCounter from "../../common/WordCounter";
import useLocalStorage from '../../common/hooks/useLocalStorage'
import uppercaseFirst from "../../common/functions/uppercaseFirst";
import "./notes.css";

const Notes = ({ icons }) => {
  const [bodyHeight, setBodyHeight] = useState("200px");
  const [notesState, setNotesState] = useLocalStorage('notes-data', [])
  const titleInput = useRef();
  const bodyInput = useRef();

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
          uppercaseFirst(titleInput.current.value),
        body:
          uppercaseFirst(bodyInput.current.value),
        date: `${new Date().getDate()}. ${new Date().getDay()}. ${new Date().getFullYear()}.`,
      },
    ]);
  }

  const clearInputs = (e) => {
    e.preventDefault();
    titleInput.current.value = "";
    bodyInput.current.value = "";
    console.log("clear inputs");
  };

  function clearNotes(e) {
    e.preventDefault();
    setNotesState([]);
  }

  function deleteNote(e) {
    const externalId = parseInt(e.target.id);
    const filteredNotes = notesState.filter((note) => note.id !== externalId);
    setNotesState(filteredNotes);
    console.log("deleting: ", e.target.id);
  }

  useEffect(() => {
    titleInput.current.value = "";
    bodyInput.current.value = "";
    console.log("clear inputs");
  }, [notesState]);

  console.log("Notes render");

  return (
    <div className="notes-wrapper">
      <div className="notes">
        <div className="note-header">
          <h1>Add a Note</h1>
          <icons.FaRegStickyNote />
        </div>
        <form onSubmit={saveNote}>
          <input
            ref={titleInput}
            placeholder="📔 Title here.."
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
            placeholder="Your notes are saved to localStorage, so if you clear browser cache they WILL be lost!&#10;..&#10;... 📑 Write your note here.&#10;..&#10;... 🪗 📆 You can also use emoji! 🫐 🧺 &#10;.."
            className={`common-input textarea-body`}
            style={heightClass}
          />

          <button className="common-button" type="submit">
            Save
          </button>
        </form>

        <div className="saved-notes-header">
          <h1>Saved notes:</h1>
          <icons.MdOutlineSave />
        </div>

        <div className="notes-holder">
          {notesState.map((note) => (
            <div key={note.id} className="note">
              <div className="note-body">
                <button
                  className="common-button"
                  onClick={deleteNote}
                  id={note.id}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
