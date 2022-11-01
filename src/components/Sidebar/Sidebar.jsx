import "./sidebar.css";
import { Link } from "react-router-dom";
import Todo from "./Todo/Todo";
import { useRef } from "react";
import SidebarTaskbar from "./SidebarTaskbar";
import DataContext from "../../contexts/DataContext";

const Sidebar = ({ icons }) => {
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
          <DataContext.Consumer>
            {(functions) => {
              return (
                <button
                  className="common-button"
                  onClick={functions.toggleSidebar}
                >
                  <icons.IoMdClose />
                </button>
              );
            }}
          </DataContext.Consumer>
        </div>
        <Todo icons={icons} searchInput={searchInput} />
        <Link to="/hub">Portfolio</Link>
        <Link to="/applets">Applets</Link>
      </div>
      <div className="sidebar-bottom">
        <div>+38154443123</div>
      </div>

      <SidebarTaskbar icons={icons} />
    </div>
  );
};

export default Sidebar;
