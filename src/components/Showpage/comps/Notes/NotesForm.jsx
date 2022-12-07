import { useContext, useState } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import Button from "../../../common/Button";
import "./notesform.css";

const NotesForm = ({
  titleInput,
  bodyInput,
  clearInputs,
  clearNotes,
  saveNote,
}) => {
  const {
    TbArrowsDiagonalMinimize,
    TbArrowsDiagonal2,
    FiMaximize,
    BsEraserFill,
    AiOutlineClear,
  } = useContext(IconsContext);

  const [bodyHeight, setBodyHeight] = useState("200px");

  const toggleButtons = [
    {
      id: 1,
      value: "200px",
      icon: <TbArrowsDiagonalMinimize size={18} />,
      onClick: changeHeight,
    },
    {
      id: 2,
      value: "400px",
      icon: <TbArrowsDiagonal2 size={18} />,
      onClick: changeHeight,
    },
    {
      id: 3,
      value: "700px",
      icon: <FiMaximize size={18} />,
      onClick: changeHeight,
    },
    {
      id: 4,
      icon: <BsEraserFill size={18} />,
      onClick: clearInputs,
    },
    {
      id: 5,
      icon: <AiOutlineClear size={18} />,
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
          <Button
            icon={button.icon}
            onClick={button.onClick}
            key={button.id}
            value={button.value}
          />
        ))}
      </div>

      <textarea
        ref={bodyInput}
        placeholder="Your notes are saved to localStorage, so if you clear browser cache they WILL be lost!&#10;..&#10;... 📑 Write your note here.&#10;..&#10;... 🪗 📆 You can also use emoji! 🫐 🧺 &#10;.."
        className={`common-input`}
        style={heightClass}
      />

      <Button type="submit" title="Save" />
    </form>
  );
};

export default NotesForm;
