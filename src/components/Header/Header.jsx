import "./header.css";
import { useEffect, useState } from "react";
import Popup from "./comps/Popup";
import DataContext from "../../contexts/DataContext";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleString());
    }, 1000);
  }, []);

  return <div>{clockState}</div>;
};

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

      <Clock />

      <div onClick={togglePopupFunction} className="header-settigns">
        <p>Settings</p>
        <icons.FiSettings />
        {togglePopup && <Popup icons={icons} />}
      </div>
    </div>
  );
};

export default Header;
