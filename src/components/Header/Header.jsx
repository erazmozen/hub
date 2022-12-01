import { useContext } from "react";
import { TogglesContext } from "../../contexts/TogglesContext";
import Clock from "./comps/Clock";
import "./header.css";

const Header = ({ icons }) => {
  const value = useContext(TogglesContext);
  console.log("Header render");
  return (
    <div className="header-wrapper card">
      <div className="common-icons-wrapper">
        <button onClick={value.toggleSidebar}>
          <icons.BsToggles />
        </button>

        <button onClick={value.toggleShowpage}>
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
