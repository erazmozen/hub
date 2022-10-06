import Button from "../side/Button";

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
        <div className="todo">
          <div className="todo-icons">
            <icons.FiPlusSquare />
            <icons.FiFilter />
          </div>
          <ul>
            <li>
              <icons.FiMinusSquare className="minus-icon" />
              <h4 className="todo-title">Lets put some</h4>
            </li>
            <li>
              <icons.FiMinusSquare className="minus-icon" />
              <h4 className="todo-title">Random text here</h4>
            </li>
            <li>
              <icons.FiMinusSquare className="minus-icon" />
              <h4 className="todo-title">To show some todos</h4>
            </li>
          </ul>
        </div>

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
