import { memo } from "react";
import { useEffect, useState } from "react";
import Note from "./Note";
import "./shownotes.css";

const ShowNotes = ({ icons, deleteNote, notesState, setNotesState }) => {
  console.log(" -------- Show Notes render");
  const [notesFilterdState, setNotesFilterdState] = useState(notesState);
  const [search, setSearch] = useState("");
  const [searchToggles, setSearchToggles] = useState({
    title: true,
    body: false,
  });

  useEffect(() => {
    if (!searchToggles.title && !searchToggles.body) {
      setNotesFilterdState(notesState);
    } else {
      const filteredNotes = [...notesState].filter(
        (note) =>
          (searchToggles.title && note.title.toLowerCase().includes(search)) ||
          (searchToggles.body && note.body.toLowerCase().includes(search))
      );
      setNotesFilterdState(filteredNotes);
    }

    console.log("useEffect [search, searchToggles, notesState] ");
  }, [search, searchToggles, notesState]);

  return (
    <div>
      <div className="saved-notes-header">
        <h1>Saved notes:</h1>
        <icons.MdOutlineSave size={36} />
      </div>

      <div className="search-filter-wrapper">
        <div className="common-icons-wrapper">
          <button
            className="common-button"
            style={
              searchToggles.title
                ? { background: "var(--secondary)" }
                : { background: "var(--primary)" }
            }
            onClick={() =>
              setSearchToggles((prev) => ({
                ...prev,
                title: !prev.title,
              }))
            }
          >
            <icons.MdTitle size={22} />
          </button>
          <button
            className="common-button"
            style={
              searchToggles.body
                ? { background: "var(--secondary)" }
                : { background: "var(--primary)" }
            }
            onClick={() => setSearchToggles((prev) => ({ ...prev, body: !prev.body }))}
          >
            <icons.MdOutlineSubtitles size={22} />
          </button>
        </div>

        <input
          className="common-input"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="notes-holder">
        {notesFilterdState.length > 0 ? (
          notesFilterdState.map((note) => (
            <Note
              key={note.id}
              icons={icons}
              note={note}
              deleteNote={deleteNote}
              notesState={notesState}
              setNotesState={setNotesState}
            />
          ))
        ) : (
          <div>
            <h2>Nothing found..</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ShowNotes);
