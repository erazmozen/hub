import { useState } from "react";

const NotesForm = ({
  icons,
  titleInput,
  bodyInput,
  clearInputs,
  clearNotes,
  saveNote,
}) => {
  const [bodyHeight, setBodyHeight] = useState("200px");

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
    console.log("Value is not the same, setting state to ", e.target.value);
  }

  return (
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
  );
};

export default NotesForm;
