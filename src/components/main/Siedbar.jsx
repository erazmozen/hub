import Button from "../side/Button";
import Todo from "../side/Todo";
import { useRef } from "react";

const Sidebar = ({ icons, toggleSidebar }) => {
  const searchInput = useRef("");

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
    </div>
  );
};

export default Sidebar;
