import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { TogglesContext } from "../../contexts/TogglesContext";
import { IconsContext } from "../../contexts/IconsContext";
import Todo from "./Todo/Todo";
import Button from "../common/Button";
import "./sidebar.css";

const Sidebar = () => {
  const { IoMdClose } = useContext(IconsContext);
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
            icon={<IoMdClose />}
          />
        </div>
        <Todo searchInput={searchInput} />
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
