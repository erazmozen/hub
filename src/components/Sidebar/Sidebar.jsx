import "./sidebar.css";
import Button from "../common/Button";
import Todo from "./Todo/Todo";
import { useContext, useRef } from "react";
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
        <Button title="Projects" />
        <Button title="Contact" />
      </div>
      <div className="sidebar-bottom">
        <div>+38154443123</div>
      </div>

      <SidebarTaskbar icons={icons} />
    </div>
  );
};

export default Sidebar;
