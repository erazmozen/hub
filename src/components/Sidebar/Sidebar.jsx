import { useContext } from "react";
import { TodoProvider } from "../../contexts/TodosContext";
import { TogglesContext } from "../../contexts/TogglesContext";
import { IconsContext } from "../../contexts/IconsContext";
import TodoApplet from "./TodosApplet/TodosApplet";
import Button from "../common/Button";
import "./sidebar.css";

const Sidebar = () => {
  const { IoMdClose } = useContext(IconsContext);
  const value = useContext(TogglesContext);

  console.log("Sidebar render");
  return (
    <div className="sidebar-wrapper card ">
      <Button
        onClick={value.toggleSidebar}
        icon={<IoMdClose />}
      />
      <TodoProvider>
        <TodoApplet />
      </TodoProvider>
    </div>
  );
};

export default Sidebar;
