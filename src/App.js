import "./main.css";
import icons from "./icons";

function App() {
  return (
    <div className="main">
      <div className="header-wrapper background-rounded">
        <div className="logo-wrapper">
          <h3>Er</h3>
          <div className="icons-wrapper">
            <icons.FiGithub />
            <icons.GrLinkedinOption />
            <icons.FiBookOpen />
          </div>
        </div>
        <div>Clock</div>
        <div className="header-settigns">
          <p>Settings</p>
          <icons.FiSettings size={18} />
          <div className="settings-popup background-rounded">
            <div>
              <icons.FaUser />
              <p>Profile</p>
            </div>
            <div>
              <icons.FaPaintBrush />
              <p>Theme</p>
            </div>
            <div>
              <icons.FaChevronRight />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-wrapper background-rounded">
        <div className="sidebar-top">
          <div className="search-wrapper">
            <input placeholder="Search" />
          </div>
          <div className="todo">
            <div className="todo-icons">
              <icons.FiPlusSquare />
              <icons.FiFilter />
            </div>
            <ul>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">Lets put some</h4>
              </li>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">Random text here</h4>
              </li>
              <li>
                <icons.FiMinusSquare />
                <h4 className="todo-title">To show some todos</h4>
              </li>
            </ul>
          </div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <div className="sidebar-bottom">
          <div>+38154443123</div>
        </div>
      </div>
      <div className="footer-wrapper background-rounded">Footer</div>
    </div>
  );
}

export default App;
