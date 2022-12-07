import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { TogglesContext } from "../../contexts/TogglesContext";
import Todo from "./Todo/Todo";
import "./sidebar.css";
import Button from "../common/Button";

const Sidebar = ({ icons }) => {
  const searchInput = useRef("");
  const value = useContext(TogglesContext);

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
          <Button
            onClick={value.toggleSidebar}
            icon={<icons.IoMdClose />}
          />
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
    </div>
  );
};

export default Sidebar;
