const Popup = ({ icons }) => {
  return (
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
  );
};

export default Popup;
