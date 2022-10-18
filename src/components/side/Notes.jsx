import "../css/side/notes.css";

const Notes = ({ icons }) => {
  const notes = [
    { id: 1212, title: "title1", body: "body1", date: "23.21.1222" },
    { id: 12312, title: "title2", body: "body2", date: "23.21.1222" },
    { id: 12512, title: "title3", body: "body3", date: "23.21.1222" },
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

  return (
    <div className="notes">
      <form>
        <input placeholder="Title" className="common-input"></input>
        <div className="toggles-wrapper">
          {buttons.map((button) => (
            <button
              key={button.id}
              value={button.value}
              className="common-button"
            >
              {button.icon}
            </button>
          ))}
          <button className="common-button">
            <icons.AiOutlineClear size={18} />
          </button>
        </div>
        <textarea placeholder="Body" className="common-input"></textarea>

        <button className="common-button" type="submit">
          Save
        </button>
      </form>
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
