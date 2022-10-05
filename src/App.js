import "./main.css";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

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
        </div>
      </div>
      <div className="sidebar-wrapper background-rounded">
        <div className="sidebar-top">
          <div>Search</div>
          <div>Todo</div>
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
