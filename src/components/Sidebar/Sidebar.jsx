import "./sidebar.css";
import Button from "../common/Button";
import Todo from "./Todo/Todo";
import { useRef } from "react";
import SidebarTaskbar from "./SidebarTaskbar";

const Sidebar = ({ icons, toggleShowpage, toggleSidebar }) => {
  const searchInput = useRef("");

  console.log("Sidebar render");
  return (
    <div className="sidebar-wrapper background-rounded">
      <div className="sidebar-top">
        <div className="search-wrapper">
          <input
            className="common-input"
            ref={searchInput}
            placeholder="Search"
          />
          <button className="common-button" onClick={toggleSidebar}>
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
      <SidebarTaskbar icons={icons} toggleShowpage={toggleShowpage} />
    </div>
  );
};

export default Sidebar;
