import { useEffect, useState } from "react";
import Note from "./Note";

const ShowNotes = ({ icons, deleteNote, notesState, setNotesState }) => {
  const [notesFilterdState, setNotesFilterdState] = useState([]);
  const [search, setSearch] = useState("");
  const [searchToggles, setSearchToggles] = useState({
    title: true,
    body: false,
  });

  useEffect(() => {
    setNotesFilterdState(notesState);
  }, [notesState]);

  useEffect(() => {
    const filteredNotes = notesState.filter(
      (note) =>
        (searchToggles.title && note.title.toLowerCase().includes(search)) ||
        (searchToggles.body && note.body.toLowerCase().includes(search))
    );
    setNotesFilterdState(filteredNotes);

    if (!searchToggles.title && !searchToggles.body)
      setNotesFilterdState(notesState);
  }, [search, searchToggles, notesState]);

  console.log(" ---  Show Notes render");

  return (
    <div>
      <div className="saved-notes-header">
        <h1>Saved notes:</h1>
        <icons.MdOutlineSave />
      </div>

      <div className="search-filter-wrapper">
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
          onClick={() =>
            setSearchToggles((prev) => ({ ...prev, body: !prev.body }))
          }
        >
          <icons.MdOutlineSubtitles size={22} />
        </button>

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

export default ShowNotes;
