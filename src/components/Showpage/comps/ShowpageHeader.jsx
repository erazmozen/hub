import "./showpageheader.css";

const ShowpageHeader = ({ icons }) => {
  return (
    <div className="showpageheader-wrapper">
      <div className="showpageheader-info">
        <icons.CgProfile size={100} />
        <div>
          <h2>Dusan Mitic, 24</h2>
          <p>Frontend Web Developer</p>
        </div>
      </div>
      <icons.FiSettings className="showpageheader-settings" />
    </div>
  );
};

export default ShowpageHeader;
