import "./sidebar.css";
import { Link } from "react-router-dom";
import Todo from "./Todo/Todo";
import { useRef } from "react";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const Sidebar = ({ icons }) => {
  const searchInput = useRef("");

  const { toggleSidebar } = useContext(DataContext);

  console.log("Sidebar render");
  return (
    <div className="sidebar-wrapper card">
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
