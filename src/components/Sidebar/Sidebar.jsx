import { useContext } from "react";
import { TodoProvider } from "../../contexts/TodosContext";
import { TogglesContext } from "../../contexts/TogglesContext";
import { IconsContext } from "../../contexts/IconsContext";
import SidebarLinks from "./SidebarLinks";
import Button from "../common/Button";
import "./sidebar.css";
import TodoApplet from "./TodosApplet/TodosApplet";

const Sidebar = () => {
  const { IoMdClose } = useContext(IconsContext);
  const value = useContext(TogglesContext);

  console.log("Sidebar render");
  return (
    <div className="sidebar-wrapper card ">
      <TodoProvider>
        <TodoApplet />
      </TodoProvider>
      <SidebarLinks />
      <Button
        onClick={value.toggleSidebar}
        icon={<IoMdClose />}
        title="Close sidebar"
      />
    </div>
  );
};

export default Sidebar;
