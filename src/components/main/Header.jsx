import "../css/main/header.css";
import { useState } from "react";
import Popup from "../side/Popup";

const Header = ({ icons, toggleSidebar }) => {
  const [togglePopup, setTogglePopup] = useState(true);

  function togglePopupFunction() {
    setTogglePopup((prev) => (prev = !prev));
  }

  return (
    <div className="header-wrapper background-rounded">
      <div className="logo-wrapper">
        <button onClick={toggleSidebar}>
          <icons.BsToggles />
        </button>
        <div className="icons-wrapper">
          <icons.GrLinkedinOption />
          <icons.FiGithub />
          <icons.FiBookOpen />
        </div>
      </div>
      <div>Clock</div>
      <div onClick={togglePopupFunction} className="header-settigns">
        <p>Settings</p>
        <icons.FiSettings />
        {togglePopup && <Popup icons={icons} />}
      </div>
    </div>
  );
};

export default Header;
