import { useContext, useState } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import Button from "../../../common/Button";
import Note from "./Note";
import "./shownotes.css";

const ShowNotes = ({ notesState, setNotesState }) => {
  const { MdOutlineSave, MdTitle, MdOutlineSubtitles } =
    useContext(IconsContext);

  const [search, setSearch] = useState("");

  const [searchToggles, setSearchToggles] = useState({
    title: true,
    body: false,
  });

  function deleteNote(e) {
    const externalId = parseInt(e.target.id);
    const filteredNotes = notesState.filter(
      (note) => note.id !== externalId
    );
    setNotesState(filteredNotes);
    console.log("deleting: ", e.target.id);
  }

  function determineStyle(target) {
    return target
      ? { background: "var(--secondary)" }
      : { background: "var(--primary)" };
  }

  console.log("Show Notes render");
  return (
    <div>
      <div className="saved-notes-header">
        <h1>Saved notes:</h1>
        <MdOutlineSave size={36} />
      </div>

      <div className="search-filter-wrapper">
        <div className="common-icons-wrapper">
          <Button
            icon={<MdTitle size={22} />}
            style={determineStyle(searchToggles.title)}
            onClick={() =>
              setSearchToggles((prev) => ({
                ...prev,
                title: !prev.title,
              }))
            }
          />
          <Button
            icon={<MdOutlineSubtitles size={22} />}
            style={determineStyle(searchToggles.body)}
            onClick={() =>
              setSearchToggles((prev) => ({
                ...prev,
                body: !prev.body,
              }))
            }
          />
        </div>

        <input
          className="common-input"
          placeholder="Search..."
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase())
          }
        />
      </div>

      <div className="notes-holder">
        {searchToggles.title === false &&
        searchToggles.body === false
          ? notesState.map((note) => (
              <Note
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                notesState={notesState}
                setNotesState={setNotesState}
              />
            ))
          : notesState
              .filter(
                (note) =>
                  (searchToggles.title &&
                    note.title
                      .toLowerCase()
                      .includes(search)) ||
                  (searchToggles.body &&
                    note.body
                      .toLowerCase()
                      .includes(search))
              )
              .map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  deleteNote={deleteNote}
                  notesState={notesState}
                  setNotesState={setNotesState}
                />
              ))}
      </div>
    </div>
  );
};

export default ShowNotes;
