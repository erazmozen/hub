import "./main.css";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function App() {
  return (
    <div className="main">
      <div className="header-wrapper background-rounded">
        <div className="logo-wrapper">
          <h3>Er</h3>
          <div className="icons-wrapper">
            <FiGithub />
            <GrLinkedinOption />
            <FiBookOpen />
          </div>
        </div>
        <div>Clock</div>
        <div className="header-settigns">
          <p>Settings</p>
          <FiSettings size={18} />
          <div className="settings-popup background-rounded">
            <div>
              <FaUser />
              <p>Profile</p>
            </div>
            <div>
              <FaPaintBrush />
              <p>Theme</p>
            </div>
            <div>
              <FaChevronRight />
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
              <FiPlusSquare />
              <FiFilter />
            </div>
            <ul>
              <li>
                <FiMinusSquare />
                <h4 className="todo-title">Lets put some</h4>
              </li>
              <li>
                <FiMinusSquare />
                <h4 className="todo-title">Random text here</h4>
              </li>
              <li>
                <FiMinusSquare />
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
