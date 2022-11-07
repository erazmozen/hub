import "./header.css";
import Clock from "./comps/Clock";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

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
        <a href="#">
          <icons.FiBookOpen />
        </a>
        <a href="#">
          <icons.GrLinkedinOption />
        </a>
        <a href="#">
          <icons.FiGithub />
        </a>
      </div>
      <Clock icons={icons} />
    </div>
  );
};

export default Header;
