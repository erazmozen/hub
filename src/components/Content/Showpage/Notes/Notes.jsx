import NotesHeader from "./NotesHeader";
import NotesForm from "./NotesForm";
import ShowNotes from "./ShowNotes";
import "./notes.css";

const Notes = () => {
  console.log("Notes render");
  return (
    <div className="notes-wrapper">
      <NotesHeader />

      <NotesForm />

      <ShowNotes />
    </div>
  );
};

export default Notes;
