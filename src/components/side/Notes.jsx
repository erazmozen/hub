import "../css/side/notes.css";

const Notes = () => {
  return (
    <div className="notes">
      <form>
        <input placeholder="Title" className="common-input"></input>
        <div className="toggles-wrapper">
          <button className="common-button">200</button>
          <button className="common-button">400</button>
          <button className="common-button">700</button>
          <button className="common-button right">Clear</button>
        </div>
        <textarea placeholder="Body" className="common-input"></textarea>

        <button className="common-button" type="submit">
          Save
        </button>
      </form>
      <div className="notes-wrapper">
        <div className="note">
          <h2>Title1</h2>
          <p>Body</p>
        </div>
        <div className="note">
          <h2>Title2</h2>
          <p>Body</p>
        </div>
        <div className="note">
          <h2>Title3</h2>
          <p>Body</p>
        </div>
        <div className="note">
          <h2>Title4</h2>
          <p>Body</p>
        </div>
        <div className="note">
          <h2>Title5</h2>
          <p>Body</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
