import { useContext, useState } from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import "./colornotes.css";

const ColorNotes = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const [noteColor, setNoteColor] = useState(note.color);

  const colorArray = [
    "#282a36",
    "#44475a",
    "#6272a4",
    "#8be9fd",
    "#50fa7b",
    "#ffb86c",
    "#ff79c6",
    "#f1fa8c",
    "#bd93f9",
    "#ff5555",
  ];

  function changeColor(e) {
    setNoteColor(e.target.name);
    dispatch({
      type: ACTIONS.CHANGE_COLOR,
      payload: { color: e.target.name, id: note.id },
    });
  }

  console.log("Color Notes render");
  return (
    <div className="color-notes">
      <button
        className="color-bar"
        style={{ background: noteColor }}
      ></button>
      <div className="button-wrapper">
        {colorArray.map((color) => (
          <button
            key={color}
            name={color}
            onClick={changeColor}
            className="color-bar color-bar-toggle"
            style={{ background: color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorNotes;
