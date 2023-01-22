import { useContext, useState } from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import { ACTIONS } from "../../../common/functions/notesReducer";
import NotesToggleButtons from "./comps/NotesToggleButtons";
import Button from "../../../common/Button";
import "./notesform.css";
import ValidateTitle from "../../../common/ValidateTitle";

const NotesForm = () => {
  const { dispatch, titleInput, bodyInput } =
    useContext(NotesContext);

  const [bodyHeight, setBodyHeight] = useState("200px");
  const [validateTitle, setValidateTitle] = useState(true);

  const heightClass = {
    height: `${bodyHeight}`,
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (titleInput.current.value === "") {
      return setValidateTitle(false);
    } else {
      setValidateTitle(true);
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
  }

  console.log("Notes Form render");

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        ref={titleInput}
        placeholder="📔 Title here.."
        className="common-input"
      />

      <NotesToggleButtons
        bodyHeight={bodyHeight}
        setBodyHeight={setBodyHeight}
      />

      <textarea
        ref={bodyInput}
        placeholder="Your notes are saved to localStorage, so if you clear browser cache they WILL be lost!&#10;..&#10;... 📑 Write your note here.&#10;..&#10;... 🪗 📆 You can also use emoji! 🫐 🧺 &#10;.."
        className="common-input"
        style={heightClass}
      />

      {!validateTitle && <ValidateTitle />}
      <Button type="submit" title="Save" />
    </form>
  );
};

export default NotesForm;
