import Popup from "../side/Popup";

const Header = ({ icons }) => {
  return (
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
        <Popup icons={icons} />
      </div>
    </div>
  );
};

export default Header;