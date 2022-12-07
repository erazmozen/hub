import { useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import "./showpageheader.css";

const ShowpageHeader = () => {
  const { CgProfile, FiSettings } =
    useContext(IconsContext);
  return (
    <div className="showpageheader-wrapper">
      <div className="showpageheader-info">
        <CgProfile size={100} />
        <div>
          <h2>Dusan Mitic, 24</h2>
          <p>Frontend Web Developer</p>
        </div>
      </div>
      <FiSettings className="showpageheader-settings" />
    </div>
  );
};

export default ShowpageHeader;
