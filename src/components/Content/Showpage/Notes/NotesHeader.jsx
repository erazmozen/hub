import { useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";

const NotesHeader = () => {
  const { FaRegStickyNote } = useContext(IconsContext);
  console.log("NotesHeader render");
  return (
    <div className="notes-header">
      <h1>Add a Note</h1>
      <FaRegStickyNote />
    </div>
  );
};

export default NotesHeader;
