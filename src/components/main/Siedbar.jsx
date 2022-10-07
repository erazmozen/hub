import "../css/main/sidebar.css";
import Button from "../side/Button";
import Todo from "../side/Todo";
import { useRef } from "react";
import SidebarTaskbar from "../side/SidebarTaskbar";
import { useState } from "react";

const Sidebar = ({ icons, toggleSidebar }) => {
  const searchInput = useRef("");
  const [toggleSidebarTaskbar, setToggleSidebarTaskbar] = useState(false);

  function toggleTaskbar() {
    setToggleSidebarTaskbar((prev) => !prev);
  }

  return (
    <div className="sidebar-wrapper background-rounded">
      <div className="sidebar-top">
        <div className="search-wrapper">
          <input ref={searchInput} placeholder="Search" />
          <button onClick={toggleSidebar}>
            <icons.IoMdClose />
          </button>
        </div>
        <Todo icons={icons} searchInput={searchInput} />
        <Button title="Projects" />
        <Button title="Contact" />
      </div>
      <div className="sidebar-bottom">
        <div>+38154443123</div>
      </div>
      <SidebarTaskbar
        icons={icons}
        toggleSidebarTaskbar={toggleSidebarTaskbar}
        toggleTaskbar={toggleTaskbar}
      />
    </div>
  );
};

export default Sidebar;
