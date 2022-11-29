import { useContext } from "react";
import Clock from "./comps/Clock";
import DataContext from "../../contexts/DataContext";
import "./header.css";

const Header = ({ icons }) => {
  const { toggleSidebar, toggleShowpage } = useContext(DataContext);

  console.log("Header render");
  return (
    <div className="header-wrapper card">
      <div className="common-icons-wrapper">
        <button onClick={toggleSidebar}>
          <icons.BsToggles />
        </button>

        <button onClick={toggleShowpage}>
          <icons.BsReverseLayoutTextSidebarReverse />
        </button>
        <a href="www.linkedin.com/in/erazmozen">
          <icons.GrLinkedinOption />
        </a>
        <a href="https://github.com/erazmozen">
          <icons.FiGithub />
        </a>
      </div>
      <Clock icons={icons} />
    </div>
  );
};

export default Header;
