import "./sidebartaskbar.css";
import { useState } from "react";

const SidebarTaskbar = ({ icons, toggleShowpage }) => {
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
      <icons.BsReverseLayoutTextSidebarReverse
        onClick={toggleShowpage}
        size={22}
      />
    </div>
  );
};

export default SidebarTaskbar;
