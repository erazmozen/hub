import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { TogglesContext } from "../../contexts/TogglesContext";
import Todo from "./Todo/Todo";
import "./sidebar.css";

const Sidebar = ({ icons }) => {
  const searchInput = useRef("");
  const value = useContext(TogglesContext);

  console.log("Sidebar render");
  return (
    <div className="sidebar-wrapper card">
      <div className="sidebar-top">
        <div className="search-wrapper">
          <input className="common-input" ref={searchInput} placeholder="Search" />
          <button className="common-button" onClick={value.toggleSidebar}>
            <icons.IoMdClose />
          </button>
        </div>
        <Todo icons={icons} searchInput={searchInput} />
        <div className="router-links">
          <Link className="common-button" to="/hub">
            Portfolio
          </Link>
          <Link className="common-button" to="/hub/applets">
            Applets
          </Link>
        </div>
      </div>
      <div className="sidebar-bottom">
        <small>+381641199057</small>
        <small>erazmozen@protonmail.com</small>
      </div>
    </div>
  );
};

export default Sidebar;
