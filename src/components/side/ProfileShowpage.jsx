import "../css/showpage/profile.css";

const ProfileShowpage = ({ icons }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-info">
        <icons.CgProfile size={100} />
        <div>
          <h2>Dusan Mitic, 24</h2>
          <p>Frontend Web Developer</p>
        </div>
      </div>
      <icons.FiSettings className="profile-settings" />
    </div>
  );
};

export default ProfileShowpage;
