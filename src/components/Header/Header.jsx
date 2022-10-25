import "./header.css";
import { useState } from "react";
import Popup from "./comps/Popup";
import Clock from "./comps/Clock";
import DataContext from "../../contexts/DataContext";

const Header = ({ icons }) => {
  const [togglePopup, setTogglePopup] = useState(false);

  function togglePopupFunction() {
    setTogglePopup((prev) => (prev = !prev));
  }

  console.log("Header render");

  return (
    <div className="header-wrapper background-rounded">
      <div className="logo-wrapper">
        <DataContext.Consumer>
          {(functions) => (
            <button onClick={functions.toggleSidebar}>
              <icons.BsToggles />
            </button>
          )}
        </DataContext.Consumer>
        <div className="icons-wrapper">
          <icons.GrLinkedinOption />
          <icons.FiGithub />
          <icons.FiBookOpen />
        </div>
      </div>

      {/* <div onClick={togglePopupFunction} className="header-settigns">
        <p>Settings</p>
        <icons.FiSettings />
        {togglePopup && <Popup icons={icons} />}
      </div> */}

      <Clock icons={icons} />
    </div>
  );
};

export default Header;
