import { useState } from "react";

const ColorNotes = ({ note, changeNoteColor }) => {
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

  const style = {
    background: noteColor,
  };

  function changeColor(e) {
    setNoteColor(e.target.name);
    changeNoteColor(note.id, e.target.name);
  }

  console.log("Color Notes render");
  return (
    <div className="color-notes">
      <button className="color-bar" style={style}></button>
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
