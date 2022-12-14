import { useContext, useState } from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import NotesToggleButtons from "./comps/NotesToggleButtons";
import Button from "../../../common/Button";
import "./notesform.css";

const NotesForm = () => {
  const { dispatch, titleInput, bodyInput } =
    useContext(NotesContext);

  const [bodyHeight, setBodyHeight] = useState("200px");

  const heightClass = {
    height: `${bodyHeight}`,
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_NOTE,
      payload: {
        title: titleInput.current.value,
        body: bodyInput.current.value,
      },
    });
    titleInput.current.value = "";
    bodyInput.current.value = "";
    console.log("submit, clearInputs");
  }

  console.log("Notes Form render");

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        ref={titleInput}
        placeholder="๐ Title here.."
        className="common-input"
      />

      <NotesToggleButtons
        bodyHeight={bodyHeight}
        setBodyHeight={setBodyHeight}
      />

      <textarea
        ref={bodyInput}
        placeholder="Your notes are saved to localStorage, so if you clear browser cache they WILL be lost!&#10;..&#10;... ๐ Write your note here.&#10;..&#10;... ๐ช ๐ You can also use emoji! ๐ซ ๐งบ &#10;.."
        className="common-input"
        style={heightClass}
      />

      <Button type="submit" title="Save" />
    </form>
  );
};

export default NotesForm;
