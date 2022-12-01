import { useState } from "react";
import "./notesform.css";

const NotesForm = ({
  icons,
  titleInput,
  bodyInput,
  clearInputs,
  clearNotes,
  saveNote,
}) => {
  const [bodyHeight, setBodyHeight] = useState("200px");

  const toggleButtons = [
    {
      id: 1,
      value: "200px",
      icon: <icons.TbArrowsDiagonalMinimize size={18} />,
      onClick: changeHeight,
    },
    {
      id: 2,
      value: "400px",
      icon: <icons.TbArrowsDiagonal2 size={18} />,
      onClick: changeHeight,
    },
    {
      id: 3,
      value: "700px",
      icon: <icons.FiMaximize size={18} />,
      onClick: changeHeight,
    },
    {
      id: 4,
      icon: <icons.BsEraserFill size={18} />,
      onClick: clearInputs,
    },
    {
      id: 5,
      icon: <icons.AiOutlineClear size={18} />,
      onClick: clearNotes,
    },
  ];

  const heightClass = {
    transition: "height 0.3s ease",
    height: `${bodyHeight}`,
  };

  function changeHeight(e) {
    e.preventDefault();
    if (bodyHeight === e.target.value) {
      console.log("Value is same, exiting function...");
      return;
    }
    setBodyHeight(() => e.target.value);
    console.log(
      "Value is not the same, setting state to ",
      e.target.value
    );
  }

  console.log("Notes Form render");

  return (
    <form className="form-wrapper" onSubmit={saveNote}>
      <input
        ref={titleInput}
        placeholder="📔 Title here.."
        className="common-input"
      ></input>

      <div className="common-icons-wrapper">
        {toggleButtons.map((button) => (
          <button
            key={button.id}
            value={button.value}
            className="common-button"
            onClick={button.onClick}
          >
            {button.icon}
          </button>
        ))}
      </div>

      <textarea
        ref={bodyInput}
        placeholder="Your notes are saved to localStorage, so if you clear browser cache they WILL be lost!&#10;..&#10;... 📑 Write your note here.&#10;..&#10;... 🪗 📆 You can also use emoji! 🫐 🧺 &#10;.."
        className={`common-input`}
        style={heightClass}
      />

      <button className="common-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default NotesForm;
