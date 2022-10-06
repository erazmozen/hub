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
  );
};

export default Header;
