import { useContext } from "react";
import { IconsContext } from "../../../../../contexts/IconsContext";
import { NotesContext } from "../../../../../contexts/NotesContext";
import Button from "../../../../common/Button";
import { ACTIONS } from "../../../../common/functions/notesReducer";

const NotesToggleButtons = ({
  bodyHeight,
  setBodyHeight,
}) => {
  const {
    TbArrowsDiagonalMinimize,
    TbArrowsDiagonal2,
    FiMaximize,
    BsEraserFill,
    AiOutlineClear,
  } = useContext(IconsContext);

  const { dispatch, clearInputs } =
    useContext(NotesContext);

  function changeHeight(e) {
    e.preventDefault();
    if (bodyHeight === e.target.value) {
      return;
    }
    setBodyHeight(() => e.target.value);
  }

  function clearNotes(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.CLEAR_ALL,
    });
  }

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
  return (
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
  );
};

export default NotesToggleButtons;
