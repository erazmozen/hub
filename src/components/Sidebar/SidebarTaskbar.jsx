import "./sidebartaskbar.css";
import { useState } from "react";
import DataContext from "../../contexts/DataContext";

const SidebarTaskbar = ({ icons }) => {
  const [toggleSidebarTaskbar, setToggleSidebarTaskbar] = useState(false);
  function toggleTaskbar() {
    setToggleSidebarTaskbar((prev) => !prev);
  }
  console.log("SidebarTaskbar render");
  return (
    <div
      className={
        toggleSidebarTaskbar
          ? "sidebar-taskbar sidebar-taskbar-vertical"
          : "sidebar-taskbar"
      }
    >
      <icons.BsReverseLayoutSidebarInsetReverse onClick={toggleTaskbar} />
      <DataContext.Consumer>
        {(functions) => {
          return (
            <icons.BsReverseLayoutTextSidebarReverse
              onClick={functions.toggleShowpage}
              size={22}
            />
          );
        }}
      </DataContext.Consumer>
    </div>
  );
};

export default SidebarTaskbar;
