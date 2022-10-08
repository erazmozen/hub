import "../css/main/sidebar.css";
import Button from "../side/Button";
import Todo from "../side/Todo";
import { useRef } from "react";
import SidebarTaskbar from "../side/SidebarTaskbar";

const Sidebar = ({ icons, toggleShowpage, toggleSidebar }) => {
  const searchInput = useRef("");
  console.log('Sidebar render')
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
        toggleShowpage={toggleShowpage}
      />
    </div>
  );
};

export default Sidebar;
