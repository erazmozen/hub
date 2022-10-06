import Button from "../side/Button";
import Todo from "../side/Todo";

const Sidebar = ({ icons, setSidebarToggle }) => {
  function updateSidebar() {
    console.log("updateSiedbar");
    setSidebarToggle((prev) => (prev = !prev));
  }

  return (
    <div className="sidebar-wrapper background-rounded">
      <div className="sidebar-top">
        <div className="search-wrapper">
          <input placeholder="Search" />
          <button onClick={updateSidebar}>
            <icons.IoMdClose />
          </button>
        </div>

        <Todo icons={icons} />

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
